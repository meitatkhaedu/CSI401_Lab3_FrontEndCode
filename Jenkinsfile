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
		        sh "DOCKER_BUILDKIT=0 docker build -t csi401-frontend ."
              }

		print "Docker Image to Running Container"
		script {
		    sh "docker rm -f csi401-frontend-run || true"
		    sh "docker run -d --name csi401-frontend-run -p 54100:3000 csi401-frontend:latest"
                    
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
