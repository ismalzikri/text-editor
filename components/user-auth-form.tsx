"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { signIn } from "next-auth/react";
export function UserAuthForm() {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <div className={cn("grid gap-6")}>
      <form>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <label className="sr-only" htmlFor="email">
              Eamail
            </label>
            <input
              type="email"
              className={cn(
                '"flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50'
              )}
              placeholder="name@example.com"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            Sign In with Email
          </button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <button
        onClick={() => signIn("github")}
        type="button"
        className={cn(buttonVariants({ variant: "outline" }))}
        disabled={isLoading}
      >
        Github
      </button>
    </div>
  );
}
