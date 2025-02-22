pipeline {

    agent any
    environment {
        DOCKER_USERNAME = credentials('docker-username')
        DOCKER_PASSWORD = credentials('docker-password')
    }
    stages {
        stage('Checkout') {
            steps {
                print "Checkout"
                checkout([
	                $class: 'GitSCM', 
	                branches: [[name: '*/main']], 
	                userRemoteConfigs: [  [ 
			            credentialsId: 'meitat', 
			            url: 'https://github.com/meitatkhaedu/CSI401_Lab3_FrontEndCode.git' 
			]  ]
            ])
                print "Checkout Success"
            }
        }
        stage('Build') {
            steps {
	
                print "Docker Build Image"
		script {
                    sh "echo $DOCKER_PASSWORD | /usr/local/bin/docker login -u $DOCKER_USERNAME --password-stdin"
                }

		script {
			sh '/usr/local/bin/docker build -t csi401-frontend .'
		}
		print "Docker Run Container"

		script {
			sh '/usr/local/bin/docker run -d -p 44510:44513 csi401-frontend'
		}
            }
        }
        stage('Test') {
            steps {
                print "Hello Test"
            }
        }
        
    }
}
