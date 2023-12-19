"use client";
import NumberThala from "@/components/NumberThala";
import TextThala from "@/components/TextThala";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  return (
    <div className=" text-center pt-32 flex flex-col items-center justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="thala_number">THALA NUMBER</TabsTrigger>
          <TabsTrigger value="thala_text">THALA TEXT</TabsTrigger>
        </TabsList>
        <TabsContent value="thala_number">
          <NumberThala />
        </TabsContent>
        <TabsContent value="thala_text">
          <TextThala />
        </TabsContent>
      </Tabs>
    </div>
  );
}
