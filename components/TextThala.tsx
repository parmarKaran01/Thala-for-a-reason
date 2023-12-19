import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const TextThala = () => {
  const [text, setText] = useState("");
  const [isThala, setIsThala] = useState<"THALA" | "NOT_THALA" | "NONE">(
    "NONE"
  );
  const [isInputDisabled, setIsInputDisabled] = useState(false);
  const checkForThala = () => {
    setIsInputDisabled(true);
    const val = text.replace(" ", "").length;
    if (val === 7) {
      setIsThala("THALA");
    } else {
      setIsThala("NOT_THALA");
    }
    setTimeout(() => {
      console.log("world");
      setIsThala("NONE");
      setIsInputDisabled(false);
    }, 3000);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Thala Text</CardTitle>
        <CardDescription>
          Check if your Text is Thala for a reason or not !
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-2">
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
      </CardContent>
      <CardFooter>
        {isThala === "THALA" ? (
          <h3 className="mt-4">
            Wohooooooooooo,{text} IS THALA FOR A REASON!!
          </h3>
        ) : null}

        {isThala === "NOT_THALA" ? (
          <h3 className="mt-4">{text} NOT THALA :(</h3>
        ) : null}
      </CardFooter>
    </Card>
  );
};

export default TextThala;
