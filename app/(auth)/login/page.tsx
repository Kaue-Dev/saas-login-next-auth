import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginPage() {
  return (
    <>
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle>Login Form</CardTitle>
          <CardDescription>Please enter your credentials to log in to your account.</CardDescription>
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
          </form>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button type="submit" className="w-full cursor-pointer">Login</Button>
          <Button variant="link"><Link href="/">Don't have an account? Register now</Link></Button>
        </CardFooter>
      </Card>
    </>
  );
}