import { useState } from "react";
import axios from "axios";

export default function App() {
  const [text, setText] = useState("");
  const [sentiment, setSentiment] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sentimentEmojis = {
    positive: "😊",
    negative: "😞",
    neutral: "😐",
  };

  const handlePredict = async () => {
    if (!text.trim()) {
      setError("Please enter a sentence.");
      console.log("Error: No text entered.");
      return;
    }
    setLoading(true);
    setError(null);
    console.log("Sending request to backend...");
    try {
      const response = await axios.post("http://localhost:5000/analyze-sentiment", { text });
      console.log("Response from backend:", response.data);
      setSentiment(response.data.sentiment);
    } catch (err) {
      console.error("Error predicting sentiment:", err);
      setError(`Error predicting sentiment: ${err.message || err.response?.data?.message || 'Unknown error'}`);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg w-full bg-white shadow-xl rounded-lg overflow-hidden">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-8">
          <h1 className="text-4xl font-bold text-white text-center mb-4">Sentiment Analysis</h1>
          <p className="text-lg text-indigo-200 text-center">Discover the emotion behind your text.</p>
        </div>
        <div className="p-6 space-y-6">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 transition duration-200 resize-none"
            rows="4"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a sentence..."
          ></textarea>

          <button
            onClick={handlePredict}
            disabled={loading}
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 active:bg-indigo-800 transition duration-200 disabled:bg-indigo-400 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <span>Predicting...</span>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              "Predict Sentiment"
            )}
          </button>

          {error && (
            <div className="mt-4 p-4 bg-red-100 border-l-4 border-red-500 text-red-700 rounded-lg">
              <p>{error}</p>
            </div>
          )}

          {sentiment && (
            <div className="mt-6 text-center">
              <p className="text-2xl font-semibold text-gray-800">
                Sentiment:{" "}
                <span
                  className={`font-bold ${
                    sentiment === "positive"
                      ? "text-green-600"
                      : sentiment === "negative"
                      ? "text-red-600"
                      : "text-gray-600"
                  }`}
                >
                  {sentiment}
                </span>{" "}
                <span className="text-4xl">{sentimentEmojis[sentiment]}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}