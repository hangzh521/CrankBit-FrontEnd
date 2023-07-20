pipeline {
    agent any
    
    tools {
        nodejs "nodejs"
    }

    environment {
        main_distribution_id = 'E18WZZA2RA88BX'
        uat_distribution_id = ''
        prod_distribution_id = ''
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

        stage('Deploy') {
            steps {
                script {
                    def currentBranch = env.BRANCH_NAME
                    
                    if (currentBranch in ['main', 'uat', 'prod']) {
                      withVault(configuration: [timeout: 60, vaultCredentialId: 'vault-jenkins-role', vaultUrl: 'http://54.79.247.137:8200'], vaultSecrets: [[path: 'secrets/crankbit/my-secret-text', secretValues: [[vaultKey: 'AWS_ACCESS_KEY_ID'], [vaultKey: 'AWS_SECRET_ACCESS_KEY'], [vaultKey: 'AWS_DEFAULT_REGION'],[vaultKey: 'REACT_APP_BACKEND_BASE_URL']]]]) {
                        sh 'npm run build'
                        
                        if (currentBranch == 'prod') {
                            sh "aws s3 sync ./build s3://www.crankbit.com/"
                        } else {
                            sh "aws s3 sync ./build s3://www.${currentBranch}.crankbit.com/"
                        }
                        
                        sh "aws cloudfront create-invalidation --distribution-id '${env."${currentBranch}_distribution_id"}' --paths '${PATHS_TO_INVALIDATE}'"
                        }
                    }
                }
            }
        }
    }

    post {
        failure {
            emailext(attachLog: true, body: 'failed', subject: 'frontend build failed', to: 'zhaohang521@hotmail.com')
            echo "Your frontend build failed"
        }

        success {
            emailext(attachLog: true, body: 'succeeded', subject: 'frontend build succeeded', to: 'zhaohang521@hotmail.com')
            echo "Your frontend build succeeded"
        }
    }
}