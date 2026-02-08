import AddTransaction from "@/components/AddTransaction";
import Balance from "@/components/Balance";
import Guest from "@/components/Guest";
import IncomeExpense from "@/components/incomeExpense";
import { currentUser } from "@clerk/nextjs/server";
import TransactionList from "@/components/TransactionList";

export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return <Guest />;
  }

  return (
    <div className="space-y-10">
      <section className="animate-in rounded-3xl border border-white/50 bg-white/70 p-6 shadow-xl backdrop-blur-md duration-700 fade-in slide-in-from-bottom-4 dark:border-white/10 dark:bg-slate-900/70">
        <div className="flex flex-col gap-2">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Overview
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            Welcome {user.firstName}
          </h1>
          <p className="text-sm text-muted-foreground">
            Track your money with calm clarity and a simple daily rhythm.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-[1.1fr_1.9fr]">
          <Balance />
          <IncomeExpense />
        </div>
      </section>

      <section className="animate-in grid items-start gap-6 delay-150 duration-700 fade-in slide-in-from-bottom-4 lg:grid-cols-[1.1fr_1.9fr]">
        <AddTransaction />
        <TransactionList />
      </section>
    </div>
  );
}
