import React from "react";
import Link from "next/link";
import { ChevronLeft, FilePenLine, Trash } from "lucide-react";
import { UrlObject } from "url";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

interface ActionDashboardDetailProps {
  editHandler: () => void;
  deleteHandler: () => void;
}

const ActionDashboardDetail: React.FC<ActionDashboardDetailProps> = (props) => {
  const { editHandler, deleteHandler } = props;

  return (
    <>
      <TooltipProvider>
        <Tooltip delayDuration={100}>
          <TooltipTrigger asChild>
            <Button variant="outline" size="icon" onClick={editHandler}>
              <FilePenLine className="w-4 h-4" />
            </Button>
          </TooltipTrigger>
          <TooltipContent side="left">
            <p>Edit</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <AlertDialog>
        <TooltipProvider>
          <Tooltip delayDuration={100}>
            <TooltipTrigger asChild>
              <AlertDialogTrigger asChild>
                <Button variant="outline" size="icon">
                  <Trash className="w-4 h-4" />
                </Button>
              </AlertDialogTrigger>
            </TooltipTrigger>
            <TooltipContent side="left">
              <p>Delete</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              className="bg-red-500 hover:bg-red-500/80 transition-colors"
              onClick={deleteHandler}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default ActionDashboardDetail;
