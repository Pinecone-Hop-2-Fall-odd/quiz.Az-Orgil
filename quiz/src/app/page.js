'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    router.push('/login')
  }, [])

  return (
    <div style={{backgroundImage:"url(background.png)"}} className="h-screen w-screen">
      <div className="flex justify-center items-center flex-col">
        <img src="game.png" className="w-[250px]" />
        <Link href="/Logo">
          <button className="bg-gray-300">Start</button>
        </Link>
      </div>
    </div>
  )
}
