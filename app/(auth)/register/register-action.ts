"use server"

import db from "@/lib/db";
import { hashSync } from "bcrypt-ts";

export default async function registerAction(_prevState: any, formData: FormData) {
  const entries = Array.from(formData.entries());
  const data = Object.fromEntries(entries) as {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  
  if (!data.name || !data.email || !data.password || !data.confirmPassword) {
    return {
      message: "All fields are required.",
      success: false,
    }
  }

  if (data.password !== data.confirmPassword) {
    return {
      message: "Passwords do not match.",
      success: false,
    }
  }

  const userAlreadyExists = await db.user.findUnique({ where: { email: data.email } })
  if (userAlreadyExists) {
    return {
      message: "User already exists.",
      success: false,
    }
  }

  await db.user.create({
    data: {
      name: data.name,
      email: data.email,
      password: hashSync(data.password), 
    }
  })

  return {
    message: "User registered successfully.",
    success: true,
  }
}