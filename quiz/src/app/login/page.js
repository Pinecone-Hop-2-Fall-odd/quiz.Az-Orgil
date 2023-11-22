"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
    const [userName, setUserName] = useState("")
    const [pass, setPass] = useState("")
    const router = useRouter()
    const handleLogin = async () => {
        await axios.post(`http://localhost:8080/login`, { username: userName, password: pass }).then((response) => {
            if (response.status === 200) {
                console.log(response.data.user)
                localStorage.setItem("userId", response.data.user.id)
                localStorage.setItem("password", response.data.user.pass)
                if(response.data.user.username === userName){
                    if(response.data.user.pass === pass){
                        router.push('/')
                    }
                }
            } else {
                alert("Username or the password is wrong")
            }
        }).catch((error) => {
            alert("Username or the password is wrong")
        })
    }
    return (
        <div style={{ backgroundImage: "url(background.png)" }} className="h-screen w-screen flex justify-center items-center">
            <div style={{ border: "solid 1px black", width: "300px", height: "400px" }} className="bg-gray-300 flex justify-center items-center flex-col gap-[30px]">
                <h1>Log Into Logo game</h1>
                <input value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="username/id" />
                <input value={pass} type="password" onChange={(e) => setPass(e.target.value)} placeholder="password" />
                <button onClick={() => handleLogin()} className="bg-sky-400">Log In</button>
                <Link href="/createUser">
                    <button className="bg-sky-400">Create new account</button>
                </Link>
            </div>
        </div>
    )
}