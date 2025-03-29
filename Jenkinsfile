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
                        bat "docker build -t csi401-frontend ."
                        print "Docker Build Image Success"
                }

                print "Docker Image to Running Container"
                script {
                    bat "docker rm -f csi401-frontend-run || true"
                    bat "docker run -d --name csi401-frontend-run -p 54100:3000 csi401-frontend:latest"
                    print "Docker Image to Running Container Success"     
                }
		
            }
        }
        stage('Test') {
            steps {
		print "Clone Automation Testing Project"
                checkout([
	                $class: 'GitSCM', 
	                branches: [[name: '*/main']], 
	                userRemoteConfigs: [  [ 
			            credentialsId: 'meitat', 
			            url: 'https://github.com/meitatkhaedu/csi403_automation_testing.git' 
			]  ]
            	])

		print "Run Test"
		sh """
                    robot testSPU.robot
                """
            }
        }
        
    }
}
