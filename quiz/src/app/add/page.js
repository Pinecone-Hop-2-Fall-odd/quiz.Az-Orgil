"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
export default function Home() {
  const [isCorrect,setIsCorrect]=useState()
  const [question, setQuestion] = useState("")
  const [ans1, setAns1] = useState("")
  const [ans2, setAns2] = useState("")
  const [ans3, setAns3] = useState("")
  const [ans4, setAns4] = useState("")
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
      question: question.toString(),
      answers: [
        {
          ans: ans1.toString(),
          isCorrect: false
        },
        {
          ans: ans2.toString(),
          isCorrect: false
        },
        {
          ans: ans3.toString(),
          isCorrect: false
        },
        {
          ans: ans4.toString(),
          isCorrect: false
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
  };
  const correct =()=>{
  setIsCorrect(true)
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div style={{ backgroundImage: "url(too.jpeg)" }} className="h-screen w-screen flex justify-center items-center flex-col gap-[300px]" >
        <input className="h-[100px]" style={{ border: "1px solid black" }} name="question" placeholder="q" value={question} onChange={(e) => setQuestion(e.target.value)} />
        <div className="gap-[50px] flex flex-col flex-wrap h-[100px]">
          <div>
            <input type="checkbox" onClick={correct}/>
            <input name="ans1" placeholder="ans" value={ans1} onChange={(e) => setAns1(e.target.value)} />
          </div>
          <div>
            <input type="checkbox" onClick={correct}/>
            <input name="ans2" placeholder="ans" value={ans2} onChange={(e) => setAns2(e.target.value)} />
          </div>
          <div>
            <input type="checkbox" onClick={correct}/>
            <input name="ans3" placeholder="ans" value={ans3} onChange={(e) => setAns3(e.target.value)} />
          </div>
          <div>
            <input type="checkbox" onClick={correct}/>
            <input name="ans4" placeholder="ans" value={ans4} onChange={(e) => setAns4(e.target.value)} />
          </div>
        </div>
        <button className="bg-white">add</button>
      </div>
    </form>
  )
}