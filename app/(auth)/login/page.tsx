import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LoginForm } from "./login-form";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await auth();

  if (session) {
    return redirect("/")
  }

  return (
    <>
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Login Form</CardTitle>
          <CardDescription>Please enter your credentials to log in to your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </>
  );
}