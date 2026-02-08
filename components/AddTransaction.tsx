"use client";
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import addTransaction from "@/app/actions/addTransaction";
import { toast } from "react-toastify";
import { useRef } from "react";

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const clientAction = async (formData: FormData) => {
    const { data, error } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success(`Transaction added`);
      formRef.current?.reset();
    }
  };

  return (
    <>
      <Card className="self-start border-white/50 bg-white/70 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-slate-900/70">
        <CardHeader className="space-y-1">
          <CardTitle className="text-lg font-semibold">
            Add Transaction
          </CardTitle>
          <CardDescription>
            Capture income or expenses in seconds.
          </CardDescription>
        </CardHeader>
        <form ref={formRef} action={clientAction}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="text"
                className="text-xs uppercase tracking-[0.25em] text-muted-foreground"
              >
                Text
              </Label>
              <Input
                id="text"
                name="text"
                placeholder="Enter text..."
                className="bg-white/80 shadow-sm dark:bg-slate-950/40"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="amount"
                className="text-xs uppercase tracking-[0.25em] text-muted-foreground"
              >
                Amount
              </Label>
              <Input
                name="amount"
                placeholder="Enter amount..."
                type="number"
                step="0.01"
                className="bg-white/80 shadow-sm dark:bg-slate-950/40"
              />
              <p className="text-xs text-muted-foreground">
                Use a negative number for expenses.
              </p>
            </div>
          </CardContent>
          <CardFooter>
            <CardAction>
              <div className="w-full">
                <Button className="w-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md hover:from-emerald-400 hover:to-teal-400">
                  Add Transaction
                </Button>
              </div>
            </CardAction>
          </CardFooter>
        </form>
      </Card>
    </>
  );
};

export default AddTransaction;
