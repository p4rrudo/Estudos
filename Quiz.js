import React, { useState } from 'react';
import './Quiz.css'; // Importa os estilos do Quiz

const questions = [
  {
    question: "Qual é a capital do Brasil?",
    options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
    answer: "Brasília",
  },
  {
    question: "Qual é a fórmula da água?",
    options: ["H2O", "CO2", "O2", "NaCl"],
    answer: "H2O",
  },
  {
    question: "Quem escreveu 'Dom Casmurro'?",
    options: ["Machado de Assis", "José de Alencar", "Graciliano Ramos", "Joaquim Maria Machado de Assis"],
    answer: "Machado de Assis",
  },
  {
    question: "Qual é o maior planeta do Sistema Solar?",
    options: ["Terra", "Marte", "Júpiter", "Saturno"],
    answer: "Júpiter",
  },
  {
    question: "Em que ano o Brasil foi descoberto?",
    options: ["1492", "1500", "1600", "1700"],
    answer: "1500",
  },
  // Adicione mais perguntas aqui se desejar
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleOptionClick = (option) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setIsQuizFinished(true);
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setIsQuizFinished(false);
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div>
          <h2>Você acertou {score} de {questions.length} perguntas</h2>
          <button className="restart-button" onClick={handleRestart}>Reiniciar</button>
        </div>
      ) : (
        <div>
          <h1>Quiz</h1>
          {isQuizFinished ? (
            <h2>Fim do Quiz!</h2>
          ) : (
            <>
              <h2>{questions[currentQuestion].question}</h2>
              {questions[currentQuestion].options.map((option) => (
                <button key={option} onClick={() => handleOptionClick(option)} className="option-button">
                  {option}
                </button>
              ))}
            </>
          )}
          {currentQuestion < questions.length - 1 && (
            <button className="next-button" onClick={() => setCurrentQuestion(currentQuestion + 1)}>
              Próxima Pergunta
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Quiz;
