"use server";

import { signIn } from "@/auth";
import { isRedirectError } from "next/dist/client/components/redirect-error";

export default async function loginAction(_prevState: any, formData: FormData) {
  try {
    await signIn('credentials', {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: true,
      redirectTo: "/",
    })

    return {
      message: "Login successful.",
      success: true
    }
  } catch (error: any) {
    // Handle redirect errors specifically (community solution)
    if (isRedirectError(error)) {
      throw error;
    }

    if (error.type === "CredentialsSignin") {
      return {
        message: "Invalid email or password.",
        success: false,
      }
    }

    return {
      message: "An unexpected error occurred. Please try again later.",
      success: false,
    }
  }
}