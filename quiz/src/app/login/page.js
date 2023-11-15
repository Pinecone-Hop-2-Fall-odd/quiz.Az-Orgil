"use client";
import Link from "next/link";

export default function Home() {
    return (
        <div style={{backgroundImage:"url(background.png)"}} className="h-screen w-screen flex justify-center items-center">
            <div style={{border:"solid 1px black",width:"300px",height:"400px"}} className="bg-gray-300 flex justify-center items-center flex-col gap-[30px]">
                <h1>Log Into Logo game</h1>
                <input placeholder="username/id"/>
                <input placeholder="password"/>
                <Link href="/">
                <button className="bg-sky-400">Log In</button>
                </Link>
                <Link href="/signin">
                <button className="bg-sky-400">Create new account</button>
                </Link>
            </div>
        </div>
    )
}