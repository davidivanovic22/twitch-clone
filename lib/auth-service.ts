import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { db } from "@/lib/db";

export const getSelf = async () => {
  const self = await currentUser();

  if (!self || !self.username) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: { externalUserId: self.id },
  });

  if (!user) {
    redirect('/not-found')
    return
  }

  return user;
};

export const getSelfByUsername = async (username: string) => {
  const self = await currentUser();

  if (!self || !self.username) {
    throw new Error("Unauthorized");
  }

  const user = await db.user.findUnique({
    where: { username }
  });

  if (!user) {
    redirect('/not-found')
    return
  }

  if (self.username !== user.username) {
    throw new Error("Unauthorized");
  }

  return user;
};
