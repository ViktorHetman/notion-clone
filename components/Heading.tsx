"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { SignInButton } from "@clerk/clerk-react";

import { Button } from "./ui/button";
import { Spinner } from "./Spinner";

const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  return (
    <header className="max-w-3xl space-y-4 ">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents & Plans. Unifed. Welcome to
        <br />
        <span className="underline">Notion Clone</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        Notion Clone is the connected where <br />
        better, faster work happens.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {isAuthenticated && !isLoading && (
        <Button asChild className="group">
          <Link href="/documents">
            Enter Notion Clone
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition" />
          </Link>
        </Button>
      )}
      {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button className="group">
            Get Notion Clone Free
            <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition" />
          </Button>
        </SignInButton>
      )}
    </header>
  );
};

export default Heading;
