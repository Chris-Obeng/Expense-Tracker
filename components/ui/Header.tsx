import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "./button";
import { ModeToggle } from "../ModeToggle";
import { checkUser } from "@/lib/checkUser";

const Header = async () => {
  const user = await checkUser();

  return (
    <header className="sticky top-0 z-30 w-full border-b border-white/40 bg-white/70 backdrop-blur-xl shadow-sm dark:border-white/10 dark:bg-slate-900/70">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300">
            <span className="text-sm font-semibold">ET</span>
          </div>
          <div className="leading-tight">
            <h1 className="text-base font-semibold tracking-tight">
              Expense Tracker
            </h1>
            <p className="text-xs text-muted-foreground">
              Calm money clarity.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <SignedOut>
            <SignInButton mode="modal">
              <Button
                variant="default"
                className="cursor-pointer rounded-full px-5 shadow-sm"
              >
                Sign In
              </Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>

          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
