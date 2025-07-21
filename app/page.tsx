import { Button } from "@/components/ui/button";
import logoutAction from "./(auth)/(logout)/logout-action";
import Link from "next/link";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-2 w-full max-w-3xs mx-auto">
      <div className="text-center space-y-2 mb-4">
        <h1 className="text-2xl font-medium">Welcome, {session.user?.name}</h1>
        <p className="text-sm text-gray-500">You are logged in.</p>
      </div>
      <Button className="w-full">
        <Link className="w-full text-center" href="/login">Login</Link>
      </Button>
      <Button className="w-full">
        <Link className="w-full text-center" href="/register">Register</Link>
      </Button>
      <Button className="w-full" onClick={logoutAction}>Logout</Button>
    </div>
  )
}
