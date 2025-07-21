"use server";

import { signIn } from "@/auth";

export default async function loginAction(_prevState: any, formData: FormData) {
  try {
    await signIn('credentials', {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    })
    return {
      message: "Login successful.",
      success: true
    }
  } catch (error: any) {
    if (error.type === "CredentialsSignin") {
      return {
        message: "Invalid email or password.",
        success: false,
      }
    } else {
      return {
        message: "An unexpected error occurred. Please try again later.",
        success: false,
      }
    }
  }
}