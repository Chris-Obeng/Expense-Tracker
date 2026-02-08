import React from "react";
import { Transaction } from "@/types/Transaction";
import getTransactions from "@/app/actions/getTransactions";
import TransactionItem from "./TransactionItem";

const TransactionList = async () => {
  const { transactions } = await getTransactions();
  const count = transactions?.length ?? 0;
  const hasTransactions = count > 0;
  return (
    <div className="rounded-3xl border border-white/50 bg-white/70 p-6 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-slate-900/70">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold">History</h3>
          <p className="text-sm text-muted-foreground">
            Your most recent activity.
          </p>
        </div>
        <span className="rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-muted-foreground shadow-sm dark:bg-slate-950/40">
          {count} {count === 1 ? "item" : "items"}
        </span>
      </div>
      <ul className="mt-5 space-y-3">
        {hasTransactions ? (
          transactions?.map((transaction: Transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))
        ) : (
          <li className="rounded-2xl border border-dashed border-muted-foreground/40 bg-white/60 p-6 text-center text-sm text-muted-foreground dark:border-white/10 dark:bg-slate-950/40">
            No transactions yet. Add your first entry to get started.
          </li>
        )}
      </ul>
    </div>
  );
};

export default TransactionList;
