pipeline {

    agent any
    
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
		sh '/usr/local/bin/docker build -t csi401-frontend .'

		print "Docker Run Container"
		sh '/usr/local/bin/docker run -d -p 44510:44513 csi401-frontend'
            }
        }
        stage('Test') {
            steps {
                print "Hello Test"
            }
        }
        
    }
}
