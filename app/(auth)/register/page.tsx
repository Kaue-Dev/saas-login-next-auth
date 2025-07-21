import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RegisterForm } from "./register-form";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function RegisterPage() {
  const session = await auth();

  if (session) {
    return redirect("/")
  }
  
  return (
    <>
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Register Form</CardTitle>
          <CardDescription>Please fill out the form below to create a new account.</CardDescription>
        </CardHeader>
        <CardContent>
          <RegisterForm />
        </CardContent>
      </Card>
    </>
  );
}