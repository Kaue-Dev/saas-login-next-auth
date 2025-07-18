"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Form from "next/form";
import registerAction from "./register-action";
import { useActionState } from "react";
import { TriangleAlertIcon } from "lucide-react";

export function RegisterForm() {
  const [state, formAction, isPending] = useActionState(registerAction, null)

  return (
    <Form action={formAction}>
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
      {state?.success === false && (
        <div className="bg-red-100 border-red-200 border rounded py-1.5 px-3 mt-4 w-fit flex items-center gap-1.5">
          <TriangleAlertIcon size={14} color="red" />
          <p className="text-red-500 text-sm font-medium">{state?.message}</p>
        </div>
      )}
      <div className="mt-4 text-center">
        <Button type="submit" className="w-full cursor-pointer" disabled={isPending}>Register</Button>
        <Button variant="link"><Link href="/login">Already have an account? Log in</Link></Button>
      </div>
    </Form>
  )
}