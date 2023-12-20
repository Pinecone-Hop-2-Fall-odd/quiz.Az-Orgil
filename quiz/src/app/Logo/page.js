"use client";

import axios from "axios";

export default function Home() {
  const get = async () => {
    await axios.get(`http://localhost:8080/question`, (request, response) => {
      const body = request.body
      console.log(body)
    }
    )
  }
  return (
    <div className="h-screen w-screen flex justify-center items-center" style={{ backgroundImage: "url(too.jpeg)" }}>
      <div>
        <div style={{ backgroundImage: "url(too.jpeg)" }} className="h-screen w-screen flex justify-center items-center flex-col gap-[300px]" >
          <button className="h-[100px]" style={{ border: "1px solid black" }} name="question" placeholder="q"></button>
          <div className="gap-[50px] flex flex-col flex-wrap h-[100px]">
            <button name="ans1" placeholder="ans"></button>
            <button name="ans2" placeholder="ans"></button>
            <button name="ans3" placeholder="ans"></button>
            <button name="ans4" placeholder="ans"></button>
          </div>
          <button className="bg-white" onClick={get}>add</button>
        </div>
      </div>
    </div>
  )
}