"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import getUserBalance from "./getUserBalance";
import { Transaction } from "@/types/Transaction";

async function getTransactions(): Promise<{
  transactions?: Transaction[];
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
      orderBy: {
        createdAt: "desc",
      },
    });

    return { transactions };
  } catch (error) {
    return { error: "Failed to fetch transactions" };
  }
}

export default getTransactions;
