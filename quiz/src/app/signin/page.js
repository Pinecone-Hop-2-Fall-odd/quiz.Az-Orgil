"use client";
import Link from "next/link";
export default function Home() {
    return (
        <div style={{backgroundImage:"url(background.png)"}} className="w-screen h-screen flex justify-center items-center">
                        <div style={{border:"solid 1px black",width:"300px",height:"400px"}} className="bg-gray-300 flex justify-center items-center flex-col gap-[30px]">
                <h1>create</h1>
                <input placeholder="username/id"/>
                <input placeholder="password"/>
                <Link href="/">
                <button className="bg-sky-400">Create</button>
                </Link>
            </div>
        </div>
    )
}