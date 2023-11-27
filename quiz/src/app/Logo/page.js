"use client";

import { Button } from "../../../components/buttons";

export default function Home() {
  return (
    <div className="h-screen w-screen flex justify-center items-center" style={{ backgroundImage: "url(background.png)" }}>
      <div className="gap-[30px]">
      <Button/>
      </div>
    </div>
  )
}