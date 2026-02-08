"use server";
import { auth } from "@clerk/nextjs/server";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

interface TransactionData {
  text: string;
  amount: number;
}

interface TransactionResult {
  data?: TransactionData;
  error?: string;
}

async function addTransaction(formData: FormData): Promise<TransactionResult> {
  const textValue = formData.get("text");
  const amountValue = formData.get("amount");

  //check for input values
  if (!textValue || !amountValue || textValue === "" || amountValue === "") {
    return { error: "Text and amount are required." };
  }

  const text: string = textValue.toString(); // Convert to string
  const amount: number = parseFloat(amountValue.toString()); // Convert to number

  //get logged in user
  const { userId } = await auth();

  //check for user
  if (!userId) {
    return { error: "User not found." };
  }

  try {
    const transactionData: TransactionData = await db.transaction.create({
      data: {
        text,
        amount,
        userId,
      },
    });
    revalidatePath("/");
    return { data: transactionData };
  } catch (error) {
    return { error: "Failed to add transaction." };
  }
}

export default addTransaction;
