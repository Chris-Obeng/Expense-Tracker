import React from "react";
import getIncomeExpense from "@/app/actions/getIncomeExpense";

const IncomeExpense = async () => {
  const { income, expense } = await getIncomeExpense();

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-emerald-200/70 bg-emerald-50/80 p-4 shadow-sm dark:border-emerald-500/30 dark:bg-emerald-500/10">
        <p className="text-xs uppercase tracking-[0.25em] text-emerald-700/80 dark:text-emerald-300">
          Income
        </p>
        <p className="mt-3 text-2xl font-semibold text-emerald-700 dark:text-emerald-300 tabular-nums">
          + ${income?.toFixed(2) ?? "0.00"}
        </p>
        <p className="mt-1 text-xs text-emerald-700/70 dark:text-emerald-200/70">
          Money coming in.
        </p>
      </div>

      <div className="rounded-2xl border border-rose-200/70 bg-rose-50/80 p-4 shadow-sm dark:border-rose-500/30 dark:bg-rose-500/10">
        <p className="text-xs uppercase tracking-[0.25em] text-rose-700/80 dark:text-rose-300">
          Expense
        </p>
        <p className="mt-3 text-2xl font-semibold text-rose-700 dark:text-rose-300 tabular-nums">
          - ${expense?.toFixed(2) ?? "0.00"}
        </p>
        <p className="mt-1 text-xs text-rose-700/70 dark:text-rose-200/70">
          Money going out.
        </p>
      </div>
    </div>
  );
};

export default IncomeExpense;
