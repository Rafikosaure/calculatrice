pipeline {
    agent any
    
    tools {
        nodejs 'nodejs'
    }
    
    stages {
        stage('Recup Git') {
            steps {
                git branch: 'main', url: 'https://github.com/Rafikosaure/calculatrice.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
    }
}
