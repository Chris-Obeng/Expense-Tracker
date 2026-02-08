"use client";
import { Transaction } from "@/types/Transaction";
import { addCommas, cn } from "@/lib/utils";
import { toast } from "react-toastify";
import deleteTransaction from "@/app/actions/deleteTransaction";
import React from "react";
import { Button } from "./ui/button";

const TransactionItem = ({ transaction }: { transaction: Transaction }) => {
  const isExpense = transaction.amount < 0;
  const handleDeleteTransaction = async (transactionId: string) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this transaction?",
    );

    if (!confirm) return;

    const { message, error } = await deleteTransaction(transactionId);
    if (error) {
      toast.error(error);
    } else {
      toast.success(message);
    }
  };

  return (
    <li
      className={cn(
        "group flex items-center justify-between gap-4 rounded-2xl border bg-white/70 p-4 shadow-sm transition hover:-translate-y-[1px] hover:shadow-md dark:bg-slate-950/40",
        isExpense
          ? "border-rose-200/70 dark:border-rose-500/20"
          : "border-emerald-200/70 dark:border-emerald-500/20",
      )}
    >
      <div className="space-y-1">
        <p className="text-sm font-medium text-foreground">
          {transaction.text}
        </p>
        <p className="text-xs text-muted-foreground">
          {isExpense ? "Expense" : "Income"}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "text-sm font-semibold tabular-nums",
            isExpense
              ? "text-rose-600 dark:text-rose-300"
              : "text-emerald-700 dark:text-emerald-300",
          )}
        >
          {isExpense ? "-" : "+"} ${addCommas(Math.abs(transaction.amount))}
        </span>
        <Button
          variant="ghost"
          size="icon-sm"
          className="rounded-full text-muted-foreground hover:bg-white/70 hover:text-foreground dark:hover:bg-slate-800"
          onClick={() => handleDeleteTransaction(transaction.id)}
          aria-label="Delete transaction"
        >
          X
        </Button>
      </div>
    </li>
  );
};

export default TransactionItem;
