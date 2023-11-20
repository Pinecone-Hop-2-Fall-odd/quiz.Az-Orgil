"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [userName,setUserName]=useState("")
    const [pass,setPass]=useState("")
    const handleLogin =async () => {
      await axios(`http://localhost:8080/user/${userName}`, {
      }).then((response) => {
        if(response.status === 200) {
            console.log("200")
        } else {
            console.log(aldaatai)
        }
      })
    }
    return (
        <div style={{backgroundImage:"url(background.png)"}} className="h-screen w-screen flex justify-center items-center">
            <div style={{border:"solid 1px black",width:"300px",height:"400px"}} className="bg-gray-300 flex justify-center items-center flex-col gap-[30px]">
                <h1>Log Into Logo game</h1>
                <input value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder="username/id"/>
                <input value={pass} onChange={(e)=>setPass(e.target.value)} placeholder="password"/>
                <button onClick={() => handleLogin()} className="bg-sky-400">Log In</button>
                <Link href="/createUser">
                <button className="bg-sky-400">Create new account</button>
                </Link>
            </div>
        </div>
    )
}