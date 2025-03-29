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
                        sh "/usr/local/bin/docker build -t csi401-frontend ."
                        print "Docker Build Image Success"
                }

                print "Docker Image to Running Container"
                script {
                    sh "/usr/local/bin/docker rm -f csi401-frontend-run || true"
                    sh "/usr/local/bin/docker run -d --name csi401-frontend-run -p 54100:3000 csi401-frontend:latest"
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

		print "Install Robot"
		sh 'sudo apt update && sudo apt install -y python3 python3-pip'
                sh 'pip install robotframework'
		print "Install Selenium"
		sh "pip install robotframework-seleniumlibrary"
		print "Run Test"
		sh "robot testSPU.robot"
            }
        }
        
    }
}
