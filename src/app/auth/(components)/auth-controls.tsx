"use client";
import { signIn } from "next-auth/react";
import { Button } from "patryk/components/ui/button";
import { Input } from "patryk/components/ui/input";
import { Label } from "patryk/components/ui/label";
import { useRef } from "react";

export const AuthControls = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const onLoginClick = async () => {
    if (inputRef.current?.value) {
      await signIn("credentials", {
        key: inputRef.current.value,
        callbackUrl: `/admin`,
        redirect: true,
      });
    }
  };

  return (
    <>
      <Label htmlFor="key">Key</Label>
      <Input ref={inputRef} className="mb-3" type="password" id="key" />
      <div className="flex items-center justify-end">
        <Button onClick={onLoginClick}>Login</Button>
      </div>
    </>
  );
};
