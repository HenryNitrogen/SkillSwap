"use client";

import React from "react";
import { useSession } from "next-auth/react";
import Guest from "./guest";
import Home from "./home";

export default function Page() {
  const { data: session, status } = useSession();
  const isLoading = status === "loading";

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-[#020b18] via-[#031629] to-[#062137]">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500/30 border-t-blue-500"></div>
      </div>
    );
  }

  return session ? <Home session={session} /> : <Guest />;
}
