"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [isThala, setIsThala] = useState<"THALA" | "NOT_THALA" | "NONE">("NONE");
  const [isInputDisabled, setIsInputDisabled] = useState(false)
  const checkForThala = () => {
    setIsInputDisabled(true)
    const val = text.replace(" ", "").length;
    if (val === 7) {
      setIsThala("THALA");
    } else {
      setIsThala("NOT_THALA");
    }
    setTimeout(() => {
      console.log("world");
      setIsThala("NONE");
      setIsInputDisabled(false)
    }, 3000);
  };
  return (
    <div className=" text-center pt-32 flex flex-col items-center justify-center">
      <h2 className="text-3xl">Thala for a reason</h2>
      <div className="flex items-center gap-2 mt-8">
        <Input
          placeholder="Enter Text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          disabled={isInputDisabled}
        />
        <Button onClick={checkForThala}>Check For Thala</Button>
      </div>

      {isThala === "THALA" ? <h3 className="mt-4">Wohooooooooooo,{text} IS THALA FOR A REASON!!</h3> : null}

      {isThala === "NOT_THALA" ? <h3 className="mt-4">{text} NOT THALA :(</h3> : null}
    </div>
  );
}
