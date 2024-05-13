import React from "react";
import Link from "next/link";
import { CircleUser } from "lucide-react";

import { IUserSchema } from "@/features/Auth/Login";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

interface ActionAdminMenuProps {
  data: { data: IUserSchema };
  logoutHandler: () => void;
  pathName: string;
  pathLink: string;
}

const ActionAdminMenu: React.FC<ActionAdminMenuProps> = (props) => {
  const { data, logoutHandler, pathName, pathLink } = props;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary" size="icon" className="rounded-full">
          <CircleUser className="h-5 w-5" />
          <span className="sr-only">Toggle admin menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{data?.data?.username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={pathLink as any}>{pathName}</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <button onClick={logoutHandler} className="w-full cursor-pointer">
            Logout
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ActionAdminMenu;
