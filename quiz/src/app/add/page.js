"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Home() {
  const [quiz, setQuiz] = useState({})
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login')
    }
  }, [])
  const url = 'http://localhost:8080/question'
  async function handleSubmit(e) {
    e.preventDefault()
    const data = {
      question: quiz[5].question.toString(),
      answers: [
        {
          answer: quiz[0].answer.toString(),
          isCorrect:quiz[0].isCorrect
        },
        {
          answer: quiz[1].answer.toString(),
          isCorrect:quiz[1].isCorrect
        },
        {
          answer: quiz[2].answer.toString(),
          isCorrect:quiz[2].isCorrect
        },
        {
          answer: quiz[3].answer.toString(),
          isCorrect:quiz[3].isCorrect
        },
      ]
    }
    const fetched_data = await axios({
      method: "POST",
      url: url,
      data: data,
    })
    if (fetched_data.status === 200) {
      console.log("yes")
      window.location.reload(false);
    }
    if(quiz.isCorrect===""){
      alert("")
    }
  };

  function handleCheck(index) {
    setQuiz(prev => ({ ...prev, [index]: { ...prev[index], isCorrect: true } }))
  }
  function handleAnswer(index, value) {
    setQuiz(prev => ({ ...prev, [index]: { ...prev[index], answer: value } }))
  }
  function handleQuestion(index, value) {
    setQuiz(prev => ({ ...prev, [index]: { ...prev[index], question: value } }))
  }
  console.log("quiz", quiz)
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div style={{ backgroundImage: "url(too.jpeg)" }} className="h-screen w-screen flex justify-center items-center flex-col gap-[300px]" >
        <input className="h-[100px]" style={{ border: "1px solid black" }} name="question" placeholder="q" onChange={(e) => handleQuestion(5, e.target.value)} />
        <div className="gap-[50px] flex flex-col flex-wrap h-[100px]">
          <div>
            <input type="checkbox" onClick={(e) => handleCheck(0)} />
            <input name="ans1" placeholder="ans" onChange={(e) => handleAnswer(0, e.target.value)} />
          </div>
          <div>
            <input type="checkbox" onClick={(e) => handleCheck(1)} />
            <input name="ans2" placeholder="ans" onChange={(e) => handleAnswer(1, e.target.value)} />
          </div>
          <div>
            <input type="checkbox" onClick={(e) => handleCheck(2)} />
            <input name="ans3" placeholder="ans" onChange={(e) => handleAnswer(2, e.target.value)} />
          </div>
          <div>
            <input type="checkbox" onClick={(e) => handleCheck(3)} />
            <input name="ans4" placeholder="ans" onChange={(e) => handleAnswer(3, e.target.value)} />
          </div>
        </div>
        <div style={{display:"flex", gap:"30px"}}>
      <Link href="/">
      <button className="bg-white h-[50px] w-[80px]">Home</button>
      </Link>
        <button className="bg-white w-[80px]">add</button>
        </div>
      </div>
    </form>
  )
}