import React, { useEffect, useState } from "react";
import { CircularProgress } from "@mui/material";
import './Quiz.css'
import Questions from "../../components/Questions/Questions";

const Quiz = ({ name, score, setScore, questions, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  useEffect(() => {
    if(questions.length>0){
      setOptions(
        questions &&
        handleShuffle([
          questions[currentQuestion]?.correct_answer,
          ...questions[currentQuestion]?.incorrect_answers,
        ])
      );
    }
  }, [questions,currentQuestion]);
  const handleShuffle = (optionss) => {
    return optionss.sort(() => Math.random() - 0.5);
  };
  return <div className="quiz">
    <span className="subtitle">
      Welcome {name}
    </span>
    {
      questions.length>0 ? (
        <>
        <div className="quizInfo">
          <span>{questions[currentQuestion].category} </span>
          <span>Score: {score}</span>
        </div>
        <Questions 
        currentQuestion={currentQuestion}
        setCurrentQuestion={setCurrentQuestion}
        questions={questions}
        options={options}
        correct={questions[currentQuestion]?.correct_answer}
        score={score}
        setScore={setScore}    
        />
        </>
      )
      :
      (
        <CircularProgress style={{ margin: 100 }} color="inherit" size={150} thickness={1} />
      )
    }
  </div>;
};

export default Quiz;
