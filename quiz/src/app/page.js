'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {

  const router = useRouter();
  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if(!userId) {
      router.push('/login')
    }
  }, [])

  return (
    <div style={{backgroundImage:"url(background.png)"}} className="h-screen w-screen flex justify-center">
      <div className="flex justify-center items-center flex-col">
        <img src="game.png" className="w-[250px]" />
        <Link href="/Logo">
          <button className="bg-gray-300 w-[250px] rounded">Start</button>
        </Link>
      </div>
    </div>
  )
}
