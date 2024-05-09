import React from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { UrlObject } from "url";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

interface ActionBackProps {
  href: string | UrlObject;
}

const ActionBack: React.FC<ActionBackProps> = ({ href }) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>
          <Button variant="outline" size="icon" asChild>
            <Link href={href as any}>
              <ChevronLeft className="w-4 h-4" />
            </Link>
          </Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>Back</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ActionBack;
