"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      router.push('/login')
    }
  }, [])
  const [response,setResponse]=useState("")
  const get = async () => {
   const respose =  await axios.get(`http://localhost:8080/question`)
   const body = respose.data.data[0]
   setResponse(body);
  }
  const check = ()=>{

  }
  return (
    <div className="h-screen w-screen flex justify-center items-center" style={{ backgroundImage: "url(too.jpeg)" }}>
      <div>
        <div style={{ backgroundImage: "url(too.jpeg)" }} className="h-screen w-screen flex justify-center items-center flex-col gap-[300px]" >
          <div className="h-auto w-auto text-9xl" style={{ border: "1px solid black" }} name="question" placeholder="q">{response.question}</div>
          <div className="gap-[40px] flex flex-col flex-wrap h-[300px]">
            <button className="h-auto w-auto text-9xl" name="ans1" placeholder="ans" onChange={check}>{response.ans1}</button>
            <button className="h-auto w-auto text-9xl" name="ans2" placeholder="ans" onChange={check}>{response.ans2}</button>
            <button className="h-auto w-auto text-9xl" name="ans3" placeholder="ans" onChange={check}>{response.ans3}</button>
            <button className="h-auto w-auto text-9xl" name="ans4" placeholder="ans" onChange={check}>{response.ans4}</button>
          </div>
          <button className="bg-white" onClick={get}>add</button>
        </div>
      </div>
    </div>
  )
}