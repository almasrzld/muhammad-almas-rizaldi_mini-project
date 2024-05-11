"use client";

import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useMutation } from "@tanstack/react-query";
import { Bot, RefreshCcw, X } from "lucide-react";

import { GOOGLE_API_KEY } from "@/constants/config";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TranslateAction = () => {
  const [anwer, setAnswer] = useState<string[]>([]);
  const [inputDump, setInputDump] = useState<string[]>([]);
  const [input, setInput] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY || "");

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" });
  const chat = model.startChat({
    generationConfig: {
      temperature: 1,
      topK: 0,
      topP: 0.95,
      maxOutputTokens: 8192,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const result = await chat.sendMessage(input);
      const response = await result.response;
      const text = response.text();
      return text;
    },
    onSuccess: (data) => {
      setInputDump((prev) => [...prev, input]);
      setAnswer((prev) => [...prev, data]);
      setInput("");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        mutate();
      }}
      className="fixed bottom-0 right-0 m-5 z-40 items-end gap-2 hidden sm:flex"
    >
      {isVisible && (
        <div className="flex flex-col gap-1 w-[320px]">
          {inputDump.length > 0 && (
            <div className="bg-white text-sm p-1 rounded-md space-y-2">
              {inputDump.map((input, index) => (
                <div key={index}>
                  <p>Q: {input}</p>
                  <article className="prose prose-sm">
                    A: {anwer[index]}
                  </article>
                </div>
              ))}
            </div>
          )}
          <Textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type something..."
            className="resize-none bg-white"
          />
        </div>
      )}

      {isVisible ? (
        <div className="flex flex-col gap-2 items-end">
          <div className="flex items-center justify-end gap-2">
            <Button
              size="icon"
              variant="outline"
              className="h-6 w-6"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setInputDump([]);
                setAnswer([]);
              }}
            >
              <RefreshCcw className="h-3 w-3" />
            </Button>
            <Button
              size="icon"
              variant="destructive"
              className="h-6 w-6"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsVisible(false);
              }}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <Button type="submit" disabled={isPending}>
            {isPending ? "Loading..." : "Send"}
          </Button>
        </div>
      ) : (
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="rounded-full"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsVisible(true);
                }}
              >
                <Bot className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Ask AI</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </form>
  );
};

export default TranslateAction;
