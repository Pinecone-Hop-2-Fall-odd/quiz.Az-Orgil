"use client";
import axios from "axios";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
    const [userName , setUserName] = useState("")
    const [pass,setPass] = useState("")
    const url = 'http://localhost:8080/user'
    // const [users, setUsers] = useState([]);

    // sigin, signup
    // login, createUser

    async function handleSubmit(e) {
        console.log(e)
        e.preventDefault()
        const data = {
            username: userName,
            pass: pass
        }


        const fetched_data = await axios({
            method: "POST",
            url: url,
            data: data,
        })
    };

    // async function fetchAllData() {
    //     const fetched_data = await fetch(url);
    //     console.log(fetched_data)
    //     const FETCHED_JSON = await
    //         fetched_data.json();
    //     setUsers(FETCHED_JSON.data);
    // };

    // useEffect(() => {
    //     fetchAllData();
    // }, []);

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