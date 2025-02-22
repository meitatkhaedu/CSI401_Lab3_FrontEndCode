pipeline {

    agent any
    environment {
        LOCAL_REGISTRY = "localhost:5000"
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
		    sh "/usr/local/bin/docker pull --disable-content-trust=false node:20-alpine"
                    sh "DOCKER_BUILDKIT=0 /usr/local/bin/docker build -t csi401-frontend ."
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
