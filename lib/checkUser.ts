import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/lib/db";

export const checkUser = async () => {
  const user = await currentUser();

  // Check if the user is authenticated
  if (!user) {
    return null;
  }

  // Check if the user exists in the database
  const loggedInUser = await db.user.findUnique({
    where: {
      clerKUserId: user.id,
    },
  });

  // if user is in the database return the user
  if (loggedInUser) {
    return loggedInUser;
  }
  // if user is not in the database create a new user and return it
  const newUser = await db.user.create({
    data: {
      clerKUserId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.emailAddresses[0].emailAddress,
    },
  });
  return newUser;
};
