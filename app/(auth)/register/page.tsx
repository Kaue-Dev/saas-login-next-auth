import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <>
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Register Form</CardTitle>
          <CardDescription>Please fill out the form below to create a new account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input type="text" id="email" name="email" />
            </div>
            <div className="space-y-2 mt-4">
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" name="password" />
            </div>
            <div className="space-y-2 mt-4">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input type="password" id="confirm-password" name="confirm-password" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button type="submit" className="w-full cursor-pointer">Register</Button>
          <Button variant="link"><Link href="/">Already have an account? Log in</Link></Button>
        </CardFooter>
      </Card>
    </>
  );
}