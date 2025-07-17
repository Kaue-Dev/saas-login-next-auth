"use server"

import db from "@/lib/db";
import { hashSync } from "bcrypt-ts";

export default async function registerAction(formData: FormData) {
  const entries = Array.from(formData.entries());
  const data = Object.fromEntries(entries) as {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  
  if (!data.name || !data.email || !data.password || !data.confirmPassword) {
    throw new Error("All fields are required.");
  }

  if (data.password !== data.confirmPassword) {
    throw new Error("Passwords do not match.");
  }

  const userAlreadyExists = await db.user.findUnique({ where: { email: data.email } })
  if (userAlreadyExists) {
    throw new Error("User already exists.");
  }

  await db.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashSync(data.password), 
    }
  })
}