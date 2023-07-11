pipeline {
    agent any
    
    tools {
        nodejs "nodejs"
    }

    environment {
        REACT_APP_BACKEND_BASE_URL = credentials('REACT_APP_BACKEND_BASE_URL')
        DEV_DISTRIBUTION_ID = 'E1ZJ848YXF6ROD'  
        UAT_DISTRIBUTION_ID = 'E39W69KPRVB0O3'  
        PROD_DISTRIBUTION_ID = 'E2F97VQMQD24FA'  
        PATHS_TO_INVALIDATE = '/*'
    }

    stages {
        
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

        // stage('Build') {
        //     steps {
        //         sh 'npm run build'
        //     }
        // }

        // stage('for the PR') {
        //     when {
        //         branch 'PR-*' // Only run this stage for PR 
        //     }
        //     steps {
        //         echo 'this is running for PRs'
        //     }
        // }

        // stage('for the CB branch') {
        //     when {
        //         branch 'CB-*' 
        //     }
        //     steps {
        //         echo 'this is running for CB'
        //     }
        // }

        stage('Deploy to Dev Account') {
            
            environment {
                AWS_ACCESS_KEY_ID = credentials('AWS_ACCESS_KEY_ID')
                AWS_SECRET_ACCESS_KEY = credentials('AWS_SECRET_ACCESS_KEY')
                AWS_DEFAULT_REGION = credentials('AWS_DEFAULT_REGION')
            }

            when {
                branch 'main' 
            }
            steps {
                sh 'npm run build'
                sh "aws s3 sync ./build s3://www.dev.hangzh.click/"
                sh 'aws cloudfront create-invalidation --distribution-id  "${DEV_DISTRIBUTION_ID}" --paths "${PATHS_TO_INVALIDATE}"'
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
                    sh "aws s3 sync ./build s3://www.prod.hangzh.click/"
                    sh 'aws cloudfront create-invalidation --distribution-id  "${PROD_DISTRIBUTION_ID}" --paths "${PATHS_TO_INVALIDATE}"'
                 }
             }
         }

     }
