const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const axios = require('axios');
const cors = require('cors');
const port = 5000;
app.use(bodyParser.json());
app.use(cors());

app.post("/analyze-sentiment", (req, res) => {
    const text = req.body.text;
    console.log("Received text for sentiment analysis:", text);
    axios.post('http://mlmodel:5001/predict', { 'text': text })
        .then(response => {
            console.log("Response from ml_model:", response.data);
            res.json(response.data);
        })
        .catch(error => {
            console.error("Error communicating with ml_model:", error);
            res.status(500).json({ error: "Error communicating with ml_model" });
        });
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});