"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useShallow } from "zustand/react/shallow";
import useAuthStore from "@/hook/useAuth";

import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import ActionAdminMenu from "@/components/common/action-admin-menu";

const Navbar = () => {
  const pathname = usePathname();

  const [data, getUser, logoutHandler] = useAuthStore(
    useShallow((state) => [state.data, state.getUser, state.logoutHandler])
  );
  const [isActive, setIsActive] = useState<string>("Homepage");

  const NAVBAR_ITEMS = [
    {
      name: "Homepage",
      path: "/",
    },
    {
      name: "Field",
      path: "/field",
    },
    {
      name: "About",
      path: "/about",
    },
  ];

  useEffect(() => {
    getUser();
  }, [getUser]);

  useEffect(() => {
    const activeItem = NAVBAR_ITEMS.find((item) => item.path === pathname);
    if (activeItem) {
      setIsActive(activeItem.name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 bg-white/25 border-b backdrop-blur">
      <nav className="container ">
        <div className="items-center justify-between py-2 hidden md:flex">
          <Image
            src="/images/logo.png"
            alt="Alabris Logo"
            width={140}
            height={140}
          />
          <ul className="flex items-center gap-5">
            {NAVBAR_ITEMS.map((item, index) => (
              <li key={index} className="py-2 px-1">
                <Link
                  href={item.path as any}
                  className={cn(
                    `font-semibold text-lg ${
                      isActive === item.name
                        ? "text-primary"
                        : "hover:text-primary transition-colors"
                    }`
                  )}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {data && (
              <ActionAdminMenu
                data={data}
                logoutHandler={logoutHandler}
                pathName="Dashboard"
                pathLink="/dashboard"
              />
            )}
          </ul>
        </div>
        <div className="flex md:hidden items-center justify-between py-3">
          <Image
            src="/images/logo.png"
            alt="Alabris Logo"
            width={100}
            height={100}
          />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <HamburgerMenuIcon />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <Image
                src="/images/logo.png"
                alt="Alabris Logo"
                width={100}
                height={100}
              />
              <div className="mt-2">
                {NAVBAR_ITEMS.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path as any}
                    className={cn(
                      `block font-semibold py-2 ${
                        isActive === item.name
                          ? "text-primary"
                          : "hover:text-primary transition-colors"
                      }`
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              {data && (
                <ActionAdminMenu
                  data={data}
                  logoutHandler={logoutHandler}
                  pathName="Dashboard"
                  pathLink="/dashboard"
                />
              )}
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
