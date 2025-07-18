import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { RegisterForm } from "./register-form";

export default function RegisterPage() {
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