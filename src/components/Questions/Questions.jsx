import React, { useState } from "react";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./Question.css";
import he from "he";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Questions = ({
  currentQuestion,
  setCurrentQuestion,
  questions,
  options,
  correct,
  score,
  setScore,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
    const navigate = useNavigate();
  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return "select";
    } else if (selected === i && selected !== correct) {
      return "wrong";
    } else if (i === correct) {
      return "select";
    }
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };
  const handleNext=()=>{
    if(currentQuestion > 8){
        alert("Quiz Finished")
        navigate('/result')
    }else if(selected){
        setCurrentQuestion(currentQuestion+1);
        setSelected(undefined)
        setError(false)
    }else {
        setError('please select an option first')
    }

  }
  const handleQuit=()=>{

    
  }
  return (
    <div className="question">
      <h1>Question : {currentQuestion + 1} </h1>
      <div className="singleQuestion">
        <h2>{he.decode(questions[currentQuestion].question)} </h2>
        <div className="options">
          {error && (
            <ErrorMessage>Select your answer before leaving</ErrorMessage>
          )}
          {options &&
            options.map((i) => {
              return (
                <button
                  key={i}
                  onClick={() => handleCheck(i)}
                  className={`singleOption ${selected && handleSelect(i)}`}
                  disabled={!!selected}
                >
                  {i}
                </button>
              );
            })}
        </div>
        <div className="controls">
            <Button 
            variant="contained"
            color="secondary"
            size="large"
            style={{width:185}}
            href="/"
            onClick={handleQuit}
            >Quit</Button>
            <Button
             variant="contained"
             color="primary"
             size="large"
             style={{width:185}}
             onClick={handleNext}
            >Next</Button>
        </div>
      </div>
    </div>
  );
};

export default Questions;
