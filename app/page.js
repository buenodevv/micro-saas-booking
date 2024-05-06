'use client';
import Link from "next/link";
import Login from "./login/page";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default function Home() {
  const { isAuthenticated } = getKindeServerSession();
  return (
    <div>
      {isAuthenticated() && redirect("/dashboard")}
      <Login />
    </div>
  );
}
