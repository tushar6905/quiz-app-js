import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";
import axios from "axios";

function App() {
  const [name,setName]=useState('');
  const [questions,setQuestions]=useState([]);
  const [score,setScore]=useState(0);
  const fetchQuestions= async(category,difficulty)=>{
  difficulty=difficulty.toLowerCase();
  const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`

  try {
    const {data} = await axios.get(url)
    setQuestions(data.results)
    
  } catch (error) {
    console.log(error,'in API call');
    
  }

  }
  return (
    <BrowserRouter>
      <div className="app" style={{ backgroundImage: "url(./ques1.png)" }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home name={name} setName={setName}fetchQuestions={fetchQuestions} />} />
          <Route path="/quiz" element={<Quiz name={name} score={score} setScore={setScore} questions={questions} setQuestions={setQuestions} />} />
          <Route path="/result" element={<Result name={name} score={score} />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
