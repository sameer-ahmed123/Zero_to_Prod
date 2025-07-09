import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";


export async function getMyImages() {

    const userAuth = auth();
    const user = await userAuth;
    if (!user.userId) {
        throw new Error("User not authenticated");
    }

    const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.createdAt),
  });

  return images
}


export async function getImageById(id: number) {
  const userAuth = auth();
  const user = await userAuth;
  if (!user.userId) {
    throw new Error("User not authenticated");
  }

  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!image || image.userId !== user.userId) {
    throw new Error("Image not found or access denied");
  }

  return image;
}