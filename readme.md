
# Sentiment Analysis Project

This project consists of a frontend application for sentiment analysis and a backend server that communicates with a sentiment analysis model.

## Project Structure

```
.gitignore
app.py
express.js
package.json
sentiment-analysis-frontend/
	.gitignore
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
```

## Prerequisites

- Node.js
- npm
- Python
- Flask
- Express

## How to Run the Project

### 1. Backend Server

#### Express Server

1. Navigate to the project root directory.
2. Install the required dependencies:
   ```sh
   npm install
   ```
3. Start the Express server:
   ```sh
   node express.js
   ```

#### Flask Server

1. Navigate to the project root directory.
2. Install the required Python packages:
   ```sh
   pip install flask flask-cors vaderSentiment
   ```
3. Start the Flask server:
   ```sh
   python app.py
   ```

### 2. Frontend Application

1. Navigate to the sentiment-analysis-frontend directory:
   ```sh
   cd sentiment-analysis-frontend
   ```
2. Install the required dependencies:
   ```sh
   npm install
   ```
3. Start the frontend application:
   ```sh
   npm start
   ```

The frontend application will be available at [http://localhost:3000](http://localhost:3000).

## Usage

1. Open the frontend application in your browser.
2. Enter a sentence in the text area.
3. Click on the "Predict Sentiment" button.
4. The sentiment of the entered sentence will be displayed along with an emoji representing the sentiment.

## Troubleshooting

- Ensure that both the Express and Flask servers are running.
- Check the browser console for any errors.
- Verify that the backend endpoints are correctly configured and accessible.