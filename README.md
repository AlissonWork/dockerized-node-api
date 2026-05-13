# Automated CI/CD Node.js API on AWS EC2 🚀

# Dockerized Node API

Project URL: http://3.144.189.214:3000

## 📌 Overview
This repository contains a production-ready Node.js REST API that is fully containerized using Docker and deployed on an Amazon Web Services (AWS) EC2 instance. 

The core highlight of this project is its infrastructure architecture. It features a complete Continuous Integration and Continuous Deployment (CI/CD) pipeline built with GitHub Actions, ensuring that every new code pushed to the repository is automatically built, published to a registry, and deployed to the cloud without any manual intervention.

## Project URL
[http://3.144.189.214:3000](http://3.144.189.214:3000)

*(Note: As this is a personal showcase project, the AWS EC2 instance may be spun down occasionally to manage cloud infrastructure costs).*

## 🏗️ Architecture & Tech Stack
* **Backend:** Node.js, Express.js
* **Containerization:** Docker, Docker Hub
* **Cloud Provider:** Amazon Web Services (AWS EC2 - Ubuntu Server)
* **DevOps & CI/CD:** GitHub Actions
* **Security:** GitHub Secrets (Environment variables and SSH Key management)

## ⚙️ CI/CD Pipeline Workflow
The automated deployment pipeline is configured via a YAML workflow and executes the following sequence upon every push to the `main` branch:

1. **Source Code Checkout:** Retrieves the latest application code inside a temporary GitHub runner.
2. **Docker Authentication:** Logs securely into Docker Hub using encrypted credentials.
3. **Build & Push:** Compiles the `Dockerfile` into a lightweight image and pushes it to the Docker Hub public registry.
4. **Remote Server Access:** Establishes a secure SSH connection to the AWS EC2 instance using a private `.pem` key.
5. **Container Orchestration:** Pulls the latest Docker image from the registry to the server, gracefully shuts down the legacy container, and spins up the new version while injecting secure environment variables at runtime.

## 🔒 Security Measures
Security is a primary focus of this deployment architecture. Sensitive data, such as the AWS SSH `.pem` key and application environment variables (`API_USERNAME`, `API_PASSWORD`), are **never** hardcoded or committed to the repository. They are strictly managed and securely injected during the CI/CD pipeline execution via **GitHub Secrets**.

## 💻 How to Run Locally
To run and test this containerized architecture in your local development environment:

1. Clone the repository:
   ```bash
   bash
   git clone [https://github.com/AlissonWork/dockerized-node-api.git](https://github.com/AlissonWork/dockerized-node-api.git)
   ```
2. Build the Docker image:
    ```bash
    docker build -t node-api-local .
    ```
3. Run the container (injecting your own local environment variables):
    ```bash
    docker run -d -p 3000:3000 -e API_USERNAME=admin -e API_PASSWORD=12345 -e SECRET_MESSAGE="Local Test Successful!" node-api-local
    ```
4. Access the API locally at: http://localhost:3000/secret
    