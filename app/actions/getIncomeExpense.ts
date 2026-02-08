"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import getUserBalance from "./getUserBalance";

async function getIncomeExpense(): Promise<{
  income?: number;
  expense?: number;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: "User not authenticated" };
  }
  try {
    const transactions = await db.transaction.findMany({
      where: {
        userId,
      },
    });
    const amount = transactions.map((transaction) => transaction.amount);
    const income = amount
      .filter((amount) => amount > 0)
      .reduce((acc, amount) => acc + amount, 0);
    const expense = amount
      .filter((amount) => amount < 0)
      .reduce((acc, amount) => acc + amount, 0);

    return { income, expense: Math.abs(expense) };
  } catch (error) {
    return { error: "Failed to fetch balance" };
  }
}

export default getIncomeExpense;
