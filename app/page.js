"use client";

import { useEffect } from "react";
import Home from "@/components/Home.jsx";
import SignIn from "@/components/SignIn.jsx";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    const isAuthorized =
      localStorage.getItem("username") && localStorage.getItem("password");

    if (!isAuthorized) {
      router.push("/sign-in");
    }
  }, []);

  return <Home />;
}
