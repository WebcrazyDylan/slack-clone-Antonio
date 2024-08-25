"use client";

import { useState } from "react";
import { SignInFlow } from "../typs";
import SignInCard from "./sign-in-card";
import SignUpCard from "./sign-up-card";

export default function AuthScreen() {
  const [state, setState] = useState<SignInFlow>("signIn");
  return (
    <div className="flex h-full items-center justify-center bg-[#5c3b58]">
      <div className="md:h-auto md:w-[420px]">
        {state === "signIn" ? (
          <SignInCard setState={setState} />
        ) : (
          <SignUpCard setState={setState} />
        )}
      </div>
    </div>
  );
}