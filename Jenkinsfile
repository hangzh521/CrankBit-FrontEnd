pipeline {
    agent any
    
    tools {
        nodejs "nodejs"
    }

    environment {
        // REACT_APP_BACKEND_BASE_URL = credentials('REACT_APP_BACKEND_BASE_URL')
        DEV_DISTRIBUTION_ID = 'E1ZJ848YXF6ROD'  
        UAT_DISTRIBUTION_ID = 'E39W69KPRVB0O3'  
        PROD_DISTRIBUTION_ID = 'E2F97VQMQD24FA'  
        PATHS_TO_INVALIDATE = '/*'
    }

    stages {

        stage('SonarQube Scan') {
            steps {
             script {
               def scannerHome = tool 'SonarScanner'
               withSonarQubeEnv('SonarQube Server') {
                sh "${scannerHome}/bin/sonar-scanner"   
              }
            }
          }
        }
        
        stage("Quality Gate") {
            steps {
              timeout(time: 2, unit: 'MINUTES') {
                waitForQualityGate abortPipeline: true
            }
          }
        }

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

        stage('Deploy to Dev Account') {
            
            // environment {
            //     AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
            //     AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
            //     AWS_DEFAULT_REGION = credentials('AWS_DEFAULT_REGION')
            // }

            when {
                branch 'main' 
            }

            steps {
              withVault(configuration: [timeout: 60, vaultCredentialId: 'vault-jenkins-role', vaultUrl: 'http://13.239.118.17:8200'], vaultSecrets: [[path: 'secrets/crankbit/my-secret-text', secretValues: [[vaultKey: 'AWS_ACCESS_KEY_ID'], [vaultKey: 'AWS_SECRET_ACCESS_KEY'], [vaultKey: 'AWS_DEFAULT_REGION'],[vaultKey: 'REACT_APP_BACKEND_BASE_URL']]]]) {
                sh 'npm run build'
                sh "aws s3 sync ./build s3://www.dev.hangzh.click/"
                sh 'aws cloudfront create-invalidation --distribution-id  "${DEV_DISTRIBUTION_ID}" --paths "${PATHS_TO_INVALIDATE}"'
              }
           }
        }

        stage('Deploy to UAT Account') {
            
            environment {
                AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
                AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
                AWS_DEFAULT_REGION = credentials('AWS_DEFAULT_REGION')
            }

            when {
                branch 'uat' 
            }

            steps {
                sh 'npm run build'
                sh "aws s3 sync ./build s3://www.uat.hangzh.click/"
                sh 'aws cloudfront create-invalidation --distribution-id  "${UAT_DISTRIBUTION_ID}" --paths "${PATHS_TO_INVALIDATE}"'
              }
        }

        stage('Deploy to PROD Account') {
                
            environment {
                AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
                AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
                AWS_DEFAULT_REGION = credentials('AWS_DEFAULT_REGION')
            }

            when {
                branch 'prod' 
            }

            steps {
                sh 'npm run build'
                sh "aws s3 sync ./build s3://www.hangzh.click/"
                sh 'aws cloudfront create-invalidation --distribution-id  "${PROD_DISTRIBUTION_ID}" --paths "${PATHS_TO_INVALIDATE}"'
            }
        }
    }

    post {
        failure {
            emailext(attachLog:true, body:'failed', subject:'frontend build failed', to:'zhaohang521@hotmail.com')
            echo "your frontend build failed"
        }

        success {
            emailext(attachLog:true, body:'succeed', subject:'frontend build succeed', to:'zhaohang521@hotmail.com')
            echo "your frontend build succeed"
        }
    }
}
