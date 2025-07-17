import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Form from "next/form";
import registerAction from "./register-action";

export default function RegisterPage() {
  return (
    <>
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Register Form</CardTitle>
          <CardDescription>Please fill out the form below to create a new account.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form action={registerAction}>
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input type="text" id="name" name="name" />
            </div>
            <div className="space-y-2 mt-4">
              <Label htmlFor="email">E-mail</Label>
              <Input type="email" id="email" name="email" />
            </div>
            <div className="space-y-2 mt-4">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" name="password" />
            </div>
            <div className="space-y-2 mt-4">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input type="password" id="confirmPassword" name="confirmPassword" />
            </div>
            <div className="mt-6 text-center">
              <Button type="submit" className="w-full cursor-pointer">Register</Button>
              <Button variant="link"><Link href="/">Already have an account? Log in</Link></Button>
            </div>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}