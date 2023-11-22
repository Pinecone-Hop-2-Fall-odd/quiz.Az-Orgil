"use client";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
    const [userName , setUserName] = useState("")
    const [pass,setPass] = useState("")
    const router = useRouter()
    const url = 'http://localhost:8080/user'
    async function handleSubmit(e) {
        e.preventDefault()
        const data = {
            username: userName,
            pass: pass
        }

        if(userName && pass){
            const fetched_data = await axios({
                method: "POST",
                url: url,
                data: data,
            })
            if(fetched_data.status === 200) {
                router.push('/login')
            }
        }
    };
    return (
        <div style={{ backgroundImage: "url(background.png)" }} className="w-screen h-screen flex justify-center items-center">
            <div style={{ border: "solid 1px black", width: "300px", height: "400px" }} className="bg-gray-300 flex justify-center items-center flex-col gap-[30px]">
                <h1>create</h1>
                <form onSubmit={(e) =>  handleSubmit(e)} className="flex justify-center items-center flex-col gap-[30px]">
                    <input name="name" placeholder="username" value={userName} onChange={(e) => setUserName(e.target.value)}/>
                    <input pass="pass" placeholder="password" value={pass} onChange={(e) => setPass(e.target.value)}/>
                    <button type="submit" className="bg-sky-400">Create</button>
                </form>
            </div>
        </div>
    )
}