'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Header } from "../../components/header";

export default function Home() {

  const router = useRouter();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if(!token) {
      router.push('/login')
    }
  }, [])

  return (
    <div>
    <div style={{backgroundImage:"url(too.jpeg)"}} className="h-screen w-screen  flex justify-center">
      <div className="flex justify-center items-center flex-col z-1 gap-[30px]">
        <Link href="/add">
      <button className="z-2 bg-pink-300">Add</button>
        </Link>
        <h1 className="h-[100px] w-auto flex justify-center items-center bg-white">MATHEMATICHS</h1>
        <Link href="/Logo">
          <button className="bg-gray-300 w-[250px] rounded">Start</button>
        </Link>
      </div>
    </div>
    </div>
  )
}
