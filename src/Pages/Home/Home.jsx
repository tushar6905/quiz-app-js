import React, { useState } from "react";
import "./Home.css";
import { Button, MenuItem, TextField } from "@mui/material";
import Categories from "../../Data/Categories";
import { useNavigate } from "react-router-dom";
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

const Home = ({name,setName,fetchQuestions}) => {
  const [category,setCategory]=useState('')
  const[difficulty,setDifficulty]=useState('');
  const[error,setError]=useState(false);
  const navigate=useNavigate();

  const handleSubmit=()=>{

    if(!category || !difficulty || !name){
      setError(true);
      return;
  }else {
    setError(false);
    fetchQuestions(category,difficulty);
    navigate('/quiz')
  }
}
  return (
    <div className="content">
      <div className="setting">
        <span style={{ fontSize: 30 }}>Quiz Setting</span>
        <div className="setting_select">
          {
            error && <ErrorMessage>Please fill all of the fields</ErrorMessage>
          }
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Name"
            variant="outlined"
            onChange={(e)=>setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            variant="outlined"
            onChange={(e)=>setCategory(e.target.value)}
            value={category}
            style={{ marginBottom: 25 }}
          >
            {Categories.map((cat) => (
              <MenuItem key={cat.category} value={cat.value}>{cat.category}</MenuItem>
            ))}
          </TextField>
          <TextField
            style={{ marginBottom: 25 }}
            label="Select Difficulty"
            variant="outlined"
            onChange={(e)=>setDifficulty(e.target.value)}
            value={difficulty}
            select
          >
            <MenuItem key='Easy' value="Easy">Easy</MenuItem>
            <MenuItem key='Medium' value="Medium">Medium</MenuItem>
            <MenuItem key='Hard' value="Hard">Hard</MenuItem>
          </TextField>
          <Button variant="contained" color="primary" size="medium" onClick={handleSubmit}>
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="/quiz.svg" className="banner" alt="quizImage" />
    </div>
  );
};

export default Home;
