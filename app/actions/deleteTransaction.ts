"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import getUserBalance from "./getUserBalance";

async function deleteTransaction(transactionId: string): Promise<{
  message?: string;
  error?: string;
}> {
  const { userId } = await auth();

  if (!userId) {
    return { error: "User not authenticated" };
  }
  try {
    await db.transaction.delete({
      where: {
        id: transactionId,
        userId,
      },
    });
    return { message: "Transaction deleted" };
    revalidatePath("/"); // Revalidate the homepage to update the balance and transaction list
  } catch (error) {
    return { error: "Failed to fetch balance" };
  }
}

export default deleteTransaction;
