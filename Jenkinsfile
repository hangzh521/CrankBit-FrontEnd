pipeline {
    agent any
    
    tools {
        nodejs "nodejs"
    }

    environment {
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

        stage('Deploy') {
            steps {
                script {
                    def currentBranch = env.BRANCH_NAME.toLowerCase()
                    def deployConfig = [
                        main: [account: 'main', distributionId: DEV_DISTRIBUTION_ID, baseUrl: 'www.dev.hangzh.click'],
                        uat: [account: 'uat', distributionId: UAT_DISTRIBUTION_ID, baseUrl: 'www.uat.hangzh.click'],
                        prod: [account: 'prod', distributionId: PROD_DISTRIBUTION_ID, baseUrl: 'www.hangzh.click']
                    ][currentBranch]
                    
                    if (deployConfig) {
                        withVault(configuration: [timeout: 60, vaultCredentialId: 'vault-jenkins-role', vaultUrl: 'http://13.239.118.17:8200'], vaultSecrets: [[path: 'secrets/crankbit/my-secret-text', secretValues: [[vaultKey: 'AWS_ACCESS_KEY_ID'], [vaultKey: 'AWS_SECRET_ACCESS_KEY'], [vaultKey: 'AWS_DEFAULT_REGION'],[vaultKey: 'REACT_APP_BACKEND_BASE_URL']]]]) {
                            sh 'npm run build'
                            sh "aws s3 sync ./build s3://${deployConfig.baseUrl}/"
                            sh "aws cloudfront create-invalidation --distribution-id ${deployConfig.distributionId} --paths ${PATHS_TO_INVALIDATE}"
                        }
                    } else {
                        echo "No deployment configuration found for branch: ${currentBranch}"
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