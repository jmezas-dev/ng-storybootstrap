#!groovy
pipeline {
    agent any
    environment {
        REGISTRY = 'jmezas/atsfront'
        NEW_VERSION = '1.0.0'
    }
    tools {
        nodejs "NodeJs"
    }
    parameters {
        choice(name:'VERSION', choices:['1.1.0', '1.2.0', '1.3.0'], description:'')
        booleanParam(name:'executeTests', defaultValue:true, description: 'Executes tests if true')
    }
    stages {
        stage("Checkout Github"){
            steps {
                git credentialsId: 'gh-credential', url: 'https://github.com/jmezas-dev/ng-storybootstrap.git'
            }
        }
        stage("test") {
            agent any
            when {
                expression {
                    params.executeTests == true
                }
            }
            steps {
                sh "docker build --target test . -t jmezas/atstest ."
                sh "docker run -it jmezas/atstest"
            }
        }
        stage("build") {
            agent any
            steps {
                echo "building the application v${NEW_VERSION}"
                sh "docker build --target build -t ${REGISTRY}:${NEW_VERSION} ."
            }
        }
        stage("deploy") {
            agent any
            steps {
                echo "deploying the application ${params.VERSION}"
                script {
                    withCredentials([string(credentialsId: 'docker', variable: 'CREDENTIALS')]) {
                        sh "docker login --username jmezas -p ${CREDENTIALS}"
                        sh "docker tag ${REGISTRY}:${NEW_VERSION} ${REGISTRY}:latest"
                        sh "docker push ${REGISTRY}:latest"
                    }
                }
            }
        }
    }
}
