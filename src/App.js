import React, { useState, useEffect } from 'react';
import './App.css';

const questions = [
  {
    question: 'Which of the following is NOT a valid variable name in Python?',
    options: ['myVar', '123Var', '_var', 'Var123'],
    answer: '123Var',
  },
  {
    question: 'What is the output of the following code?\n\nprint(3 * "Python")',
    options: ['3Python', 'PythonPythonPython', 'Error', 'None of the above'],
    answer: 'PythonPythonPython',
  },
  {
    question: 'Which of the following is used to take user input in Python?',
    options: ['cin', 'scanf', 'input', 'readline'],
    answer: 'input',
  },
  {
    question: 'What does the len() function return?',
    options: ['The number of characters in a string', 'The number of items in a list', 'The length of a tuple', 'All of the above'],
    answer: 'All of the above',
  },
  {
    question: 'Which of the following is a valid way to comment in Python?',
    options: ['// This is a comment', '# This is a comment', '-- This is a comment', '/* This is a comment */'],
    answer: '# This is a comment',
  },
  {
    question: 'What is the correct syntax to open a file named "data.txt" in Python?',
    options: ['open("data.txt")', 'open("data.txt", "w")', 'open("data.txt", "r")', 'open("data.txt", "a")'],
    answer: 'open("data.txt")',
  },
  {
    question: 'What is the output of the following code?\n\nprint(10 / 3)',
    options: ['3', '3.33', '3.3333', '3.3333333333333335'],
    answer: '3.3333333333333335',
  },
  {
    question: 'Which of the following is a built-in module in Python?',
    options: ['math', 'numpy', 'pandas', 'All of the above'],
    answer: 'All of the above',
  },
  {
    question: 'What does the following code do?\n\nimport random\nprint(random.randint(1, 10))',
    options: ['Prints a random number between 1 and 10', 'Generates an error', 'Imports the random module', 'None of the above'],
    answer: 'Prints a random number between 1 and 10',
  },
  {
    question: 'What is the correct way to write a function in Python?',
    options: ['def myFunction()', 'function myFunction()', 'func myFunction()', 'None of the above'],
    answer: 'def myFunction()',
  },
];


function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 600 seconds (10 minutes)

  useEffect(() => {
    if (timeLeft > 0 && !showScore) {
      const timer = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showScore) {
      setShowScore(true);
    }
  }, [timeLeft, showScore]);

  const handleAnswerOptionClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="app">
      <h1 className="app-heading">Python Quiz</h1>
      <div className="timer">Time Left: {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}</div>
      <div className="quiz-container">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                Question {currentQuestion + 1}/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].question}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleAnswerOptionClick(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;



 

