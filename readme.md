```markdown
# Sentiment Analysis Project

This project consists of a frontend application for sentiment analysis and a backend server that communicates with a sentiment analysis model.

## Project Structure

```
.gitignore
backend/
    express.js
    package.json
frontend/
    .gitignore
    Dockerfile
    package.json
    public/
        favicon.ico
        index.html
        logo192.png
        logo512.png
        manifest.json
        robots.txt
    README.md
    src/
        App.css
        App.js
        App.test.js
        index.css
        index.js
        logo.svg
        reportWebVitals.js
        setupTests.js
ml_model/
    app.py
    Dockerfile
    requirements.txt
docker-compose.yaml
```

## Prerequisites

- Docker
- Docker Compose

## How to Run the Project

### Using Docker Compose

1. Navigate to the project root directory.
2. Build and start the Docker containers:
   ```sh
   docker-compose up --build
   ```

The frontend application will be available at [http://localhost:3000](http://localhost:3000).

### Services and Ports

- **Frontend Application**: Runs on port `3000`
- **Backend (Express Server)**: Runs on port `5000`
- **ML Model (Flask Server)**: Runs on port `5001`

### Networks

- **frontend-backend**: Network connecting the frontend and backend services.
- **backend-ml_model**: Network connecting the backend and ML model services.

### Individual Services

#### Express Server

1. Navigate to the `backend` directory.
2. Build the Docker image:
   ```sh
   docker build -t sentiment-analysis-backend .
   ```
3. Run the Docker container:
   ```sh
   docker run -p 5000:5000 sentiment-analysis-backend
   ```

#### Flask Server

1. Navigate to the `ml_model` directory.
2. Build the Docker image:
   ```sh
   docker build -t sentiment-analysis-mlmodel .
   ```
3. Run the Docker container:
   ```sh
   docker run -p 5001:5001 sentiment-analysis-mlmodel
   ```

#### Frontend Application

1. Navigate to the `frontend` directory.
2. Build the Docker image:
   ```sh
   docker build -t sentiment-analysis-frontend .
   ```
3. Run the Docker container:
   ```sh
   docker run -p 3000:3000 sentiment-analysis-frontend
   ```

## Usage

1. Open the frontend application in your browser.
2. Enter a sentence in the text area.
3. Click on the "Predict Sentiment" button.
4. The sentiment of the entered sentence will be displayed along with an emoji representing the sentiment.

## Troubleshooting

- Ensure that all Docker containers are running.
- Check the browser console for any errors.
- Verify that the backend endpoints are correctly configured and accessible.
- Use `docker-compose logs` to check the logs for any errors in the services.
```

### Summary of Changes

- Updated the project structure to reflect the new directory layout.
- Added instructions for using Docker Compose to build and start the services.
- Explained where each service is running (ports) and the networks they are using.
