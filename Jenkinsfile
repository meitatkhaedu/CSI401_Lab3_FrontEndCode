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
			sh 'curl -sS https://bootstrap.pypa.io/get-pip.py -o get-pip.py'
	                sh 'python3 get-pip.py'
	                sh 'pip3 install robotframework'
	                print "Install Selenium Library"
	                sh 'pip3 install robotframework-seleniumlibrary'
			print "Verify Robot Framework installation"
	                sh 'pip3 show robotframework'
	                print "Run Robot Framework Tests"
	                sh 'python3 -m robot testSPU.robot'
		
            }
        }
        
    }
}
