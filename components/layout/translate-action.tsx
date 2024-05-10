"use client";

import React, { useState } from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { Languages, X } from "lucide-react";

import { RAPID_API_HOST, RAPID_API_KEY } from "@/constants/config";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TranslateAction = () => {
  const [anwer, setAnswer] = useState("");
  const [input, setInput] = useState("");
  const [inputDump, setInputDump] = useState("");

  const [isVisible, setIsVisible] = useState(false);

  const options = {
    method: "POST",
    url: "https://google-translator9.p.rapidapi.com/v2",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": RAPID_API_KEY,
      "X-RapidAPI-Host": RAPID_API_HOST,
    },
    data: {
      q: input,
      source: "en",
      target: "id-ID",
      format: "text",
    },
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async () => {
      const response = await axios.request(options);
      return response.data;
    },
    onSuccess: (data) => {
      setInputDump(input);
      setAnswer(data?.data?.translations[0]?.translatedText);
      setInput("");
    },
  });
  return (
    <div className="fixed bottom-0 right-0 m-5 items-end gap-2 hidden sm:flex">
      {isVisible && (
        <div className="flex flex-col gap-1 w-[320px]">
          {inputDump && (
            <div className="bg-white text-sm p-1 rounded-md space-y-2">
              <p>Q: {inputDump}</p>
              <p>A: {anwer}</p>
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
          <Button
            size="icon"
            variant="destructive"
            className="h-6 w-6"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>
          <Button onClick={() => mutate()} disabled={isPending}>
            {inputDump ? "Translate Again" : "Translate"}
          </Button>
        </div>
      ) : (
        <TooltipProvider delayDuration={0}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="icon"
                className="rounded-full"
                onClick={() => setIsVisible(true)}
              >
                <Languages className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Translate</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </div>
  );
};

export default TranslateAction;
