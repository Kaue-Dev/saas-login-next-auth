"use client";

import Form from "next/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useActionState } from "react";
import loginAction from "./login-action";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TriangleAlertIcon } from "lucide-react";

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, null)

  return (
    <Form action={formAction}>
      <div className="space-y-2">
        <Label htmlFor="email">E-mail</Label>
        <Input type="text" id="email" name="email" />
      </div>
      <div className="space-y-2 mt-4">
        <Label htmlFor="password">Password</Label>
        <Input type="password" id="password" name="password" />
      </div>
      {state?.success === false && (
        <div className="bg-red-100 border-red-200 border rounded py-1.5 px-3 mt-4 w-fit flex items-center gap-1.5">
          <TriangleAlertIcon size={14} color="red" />
          <p className="text-red-500 text-sm font-medium">{state?.message}</p>
        </div>
      )}
      <div className="mt-4 flex flex-col">
        <Button type="submit" className="w-full cursor-pointer" disabled={isPending}>Login</Button>
        <Button variant="link"><Link href="/register">Don't have an account? Register now</Link></Button>
      </div>
    </Form>
  )
}