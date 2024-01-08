"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [response, setResponse] = useState("")
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login')
    } else {
      const get = async () => {
        const response = await axios.get(`http://localhost:8080/question`)
        setResponse(response.data.data[0]);
      }
      get()
    }
  }, [])

  const check = (i) => {
    if (response.answers[i].isCorrect === true) {
      alert("Correct answer")
    } else {
      alert("Wrong answer")
    }
  }
  console.log(response)
  return (
    <div className="h-screen w-screen flex justify-center items-center" style={{ backgroundImage: "url(too.jpeg)" }}>
      <div>
        <div style={{ backgroundImage: "url(too.jpeg)" }} className="h-screen w-screen flex justify-center items-center flex-col gap-[300px]" >
          <div className="h-auto w-auto text-9xl bg-white" style={{ border: "1px solid black" }} name="question" placeholder="q">{response.question}</div>
          <div className="gap-[40px] flex flex-col flex-wrap h-[300px]">
            {response?.answers?.map((answer, index) => {
              return (
                <button className="h-auto w-auto text-9xl" name="ans1" placeholder="ans" onClick={() => check(index)}>{answer.answer}</button>

              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}