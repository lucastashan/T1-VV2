pipeline {
  agent {
    docker {
      image 'node:20.9.0'
    }
  }

  stages {
    stage('hello world') {
      steps {
        echo 'Hello World'
      }
    }

    stage('Install dependencies') {
      steps {
        sh 'npm install'
      }
    }
  }
}