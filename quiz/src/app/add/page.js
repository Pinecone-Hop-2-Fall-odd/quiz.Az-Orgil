"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
export default function Home() {
  const [question, setQuestion] = useState("")
  const [ans1, setAns1] = useState("")
  const [ans2, setAns2] = useState("")
  const [ans3, setAns3] = useState("")
  const [ans4, setAns4] = useState("")
  const router = useRouter()
  const url = 'http://localhost:8080/question'
  async function handleSubmit(e) {
    e.preventDefault()
    const data = {
      question: question.toString(),
      ans1: ans1.toString(),
      ans2: ans2.toString(),
      ans3: ans3.toString(),
      ans4: ans4.toString(),
    }
      const fetched_data = await axios({
        method: "POST",
        url: url,
        data: data,
      })
      if(fetched_data.status === 200){
        console.log("yes")
        window.location.reload(false);
      }
  };
  return (
    <form onSubmit={(e) =>  handleSubmit(e)}>
      <div style={{ backgroundImage: "url(too.jpeg)" }} className="h-screen w-screen flex justify-center items-center flex-col gap-[300px]" >
        <input className="h-[100px]" style={{ border: "1px solid black" }} name="question" placeholder="q" value={question} onChange={(e) => setQuestion(e.target.value)} />
        <div className="gap-[50px] flex flex-col flex-wrap h-[100px]">
          <input name="ans1" placeholder="ans" value={ans1} onChange={(e) => setAns1(e.target.value)} />
          <input name="ans2" placeholder="ans" value={ans2} onChange={(e) => setAns2(e.target.value)} />
          <input name="ans3" placeholder="ans" value={ans3} onChange={(e) => setAns3(e.target.value)} />
          <input name="ans4" placeholder="ans" value={ans4} onChange={(e) => setAns4(e.target.value)} />
        </div>
        <button className="bg-white">add</button>
      </div>
    </form>
  )
}