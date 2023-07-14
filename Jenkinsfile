pipeline {
    agent any
    
    environment {
        AWS_DEFAULT_REGION = 'ap-southeast-2'
        ECR_REGISTRY = '271584491311.dkr.ecr.ap-southeast-2.amazonaws.com'
        IMAGE_TAG = 'latest'
    }

    stages {
        // stage('SonarQube Scan') {
        //     steps {
        //         script {
        //             def scannerHome = tool 'SonarScannerBackend'
        //             withSonarQubeEnv('SonarQube Server Backend') {
        //                 sh "${scannerHome}/bin/sonar-scanner"   
        //             }
        //         }
        //     }
        // }
        
        // stage("Quality Gate") {
        //     steps {
        //         timeout(time: 2, unit: 'MINUTES') {
        //             waitForQualityGate abortPipeline: true
        //         }
        //     }
        // }
        
        stage('Install') {
            steps {
                sh 'npm install'
            }
        }

        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    def currentBranch = env.BRANCH_NAME.toLowerCase()
                    def clusterName
                    def serviceName
                    def taskDefinition

                    if (currentBranch == 'main') {
                        clusterName = 'crankbit-cluster-main'
                        serviceName = 'crankbit-backend-service-main'
                        taskDefinition = 'crankbit-task-definition-main'
                    } else if (currentBranch == 'uat') {
                        clusterName = 'crankbit-cluster-uat'
                        serviceName = 'crankbit-backend-service-uat'
                        taskDefinition = 'crankbit-task-definition-uat'
                    } else if (currentBranch == 'prod') {
                        clusterName = 'crankbit-cluster-prod'
                        serviceName = 'crankbit-backend-service-prod'
                        taskDefinition = 'crankbit-task-definition-prod'
                    } else {
                        echo "No deployment configuration found for branch: ${currentBranch}"
                        return
                    }

                    environment {
                        MONGO_URI = credentials('MONGO_URI')
                        JWT_SECRET = credentials('JWT_SECRET')
                        JWT_LIFETIME = credentials('JWT_LIFETIME')
                        AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
                        AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
                        ECR_REPO = "crankbit-${currentBranch}"
                        CLUSTER_NAME = clusterName
                        SERVICE_NAME = serviceName
                        TASK_DEFINITION = taskDefinition
                    }

                    sh "docker build --build-arg MONGO_URI=${MONGO_URI} --build-arg JWT_SECRET=${JWT_SECRET} --build-arg JWT_LIFETIME=${JWT_LIFETIME} -t ${ECR_REPO}:${IMAGE_TAG} ."
                    sh "aws ecr get-login-password --region ${AWS_DEFAULT_REGION} | docker login --username AWS --password-stdin ${ECR_REGISTRY}"
                    sh "docker tag ${ECR_REPO}:${IMAGE_TAG} ${ECR_REGISTRY}/${ECR_REPO}:${IMAGE_TAG}"
                    sh "docker push ${ECR_REGISTRY}/${ECR_REPO}:${IMAGE_TAG}"
                    sh "aws ecs update-service --cluster ${CLUSTER_NAME} --service ${SERVICE_NAME} --task-definition ${TASK_DEFINITION} --force-new-deployment"
                }
            }
        }
    }
}
