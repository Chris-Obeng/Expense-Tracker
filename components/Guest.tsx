import { SignInButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";

const Guest = () => {
  return (
    <div className="animate-in mx-auto mt-10 flex w-full max-w-md flex-col items-center gap-4 rounded-3xl border border-white/50 bg-white/70 p-8 text-center shadow-xl backdrop-blur-md duration-700 fade-in slide-in-from-bottom-4 dark:border-white/10 dark:bg-slate-900/70">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Expense Tracker
      </p>
      <h1 className="text-3xl font-semibold tracking-tight">Welcome</h1>
      <p className="text-sm text-muted-foreground">
        Sign in to manage your transactions and stay on top of your money.
      </p>
      <SignInButton mode="modal">
        <Button className="rounded-full px-6">Sign in</Button>
      </SignInButton>
    </div>
  );
};

export default Guest;
