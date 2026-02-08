import React from "react";
import getUserBalance from "@/app/actions/getUserBalance";
import { addCommas } from "@/lib/utils";

const Balance = async () => {
  const { balance } = await getUserBalance();
  const total = balance ?? 0;
  const tone =
    total < 0
      ? "text-rose-600 dark:text-rose-300"
      : total > 0
        ? "text-emerald-700 dark:text-emerald-300"
        : "text-foreground";
  return (
    <div className="rounded-2xl border border-white/40 bg-white/70 p-5 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-900/60">
      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
        Your Balance
      </p>
      <h1
        className={`mt-3 text-3xl font-semibold tracking-tight tabular-nums ${tone}`}
      >
        ${addCommas(total)}
      </h1>
      <p className="mt-2 text-xs text-muted-foreground">
        Net total across all transactions.
      </p>
    </div>
  );
};

export default Balance;
