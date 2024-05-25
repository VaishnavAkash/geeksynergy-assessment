"use client";

import Home from "@/components/Home.jsx";
import SignIn from "@/components/SignIn.jsx";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const isAuthorized =
    localStorage.getItem("username") && localStorage.getItem("password");

  return isAuthorized ? <Home /> : router.push("/sign-in");
}
