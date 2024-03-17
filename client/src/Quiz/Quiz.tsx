import questions from "./questions.json";
import Question from "./Question.tsx";
import { useState } from "react";
import Result from "./Result.tsx";
const Quiz = () => {
  const [currentQuestion, setCurrentQuestion]: any = useState(0);
  const [correctAnswers, setCorrectAnswers]: any = useState([]);
  const anserwerClicked = (isCorrect: Boolean) => {
    setCorrectAnswers([...correctAnswers, isCorrect]);
    setCurrentQuestion(currentQuestion + 1);
  };
  return (
    <div className="m-4 flex justify-center flex-col items-center">
      <h1 className=" m-4 p-2 rounded-md text-3xl font-bold bg-black text-white">
        Quiz Application
      </h1>
      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          answerClicked={anserwerClicked}
        />
      )}
      {currentQuestion === questions.length && (
        <Result questions={questions} correctAnswers={correctAnswers} />
      )}
    </div>
  );
};
export default Quiz;
