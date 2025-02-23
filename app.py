from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from flask import Flask, request, jsonify

analyzer=SentimentIntensityAnalyzer()
vs=analyzer.polarity_scores("I am happy")
print(vs)

def get_sentiment_from_polarity_score(polarity_score):
    if polarity_score['compound'] >= 0.05:
        return 'Positive'
    elif polarity_score['compound'] <= -0.05:
        return 'Negative'
    else:
        return 'Neutral'

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data=request.get_json()
        text=data['text']
        vs=analyzer.polarity_scores(text)
        sentiment=get_sentiment_from_polarity_score(vs)
        return jsonify({'sentiment': sentiment})
    except Exception as e:
        return jsonify({'error': str(e)},400)

if __name__ == '__main__':
    app.run(debug=True,port=5001)
