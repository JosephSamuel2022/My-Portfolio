import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { parse } from 'node-html-parser';
import LoadingSpinner from './LoadingSpinner';
import './Chatbot.css';


const Chatbot = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [displayedAnswer, setDisplayedAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false); 

  const handleAsk = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post('https://josephbot.onrender.com/api/chatbot', { question });
      const html = response.data;
      const root = parse(html);
      const answerElement = root.querySelector('#answer');
      const extractedAnswer = answerElement.text;
      setAnswer(extractedAnswer);
      
    } catch (error) {
      console.error('Error:', error);
    }
    finally {
      setIsLoading(false); // Set isLoading to false when the response is received
    }
  };


  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= answer.length) {
        setDisplayedAnswer(answer.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, [answer]);

  return (
    <div id="chatbot">
      <h2 className="chatbot-heading">Discover More About Me by Conversing with My Bot</h2>
      <div className="chatbot-icon">
        <i className="fas fa-robot" style={{ color: 'red', fontSize: '40px' }}></i>
      </div>

      <div className="chatbot-question">
        
        <div className="text-area">
    <textarea
    placeholder="Ask a question about Me"
          className="input-area"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        >
          </textarea>
          </div>
        <button onClick={handleAsk} className="ask-button" disabled={isLoading}>
          Ask
        </button>
      </div>
      <div className="chatbot-answer">
        {/* Show the LoadingSpinner component if isLoading is true */}
        {isLoading ? <LoadingSpinner /> : <p className="answer-text">{displayedAnswer}</p>}
      </div>
    </div>
  );
};

export default Chatbot;
