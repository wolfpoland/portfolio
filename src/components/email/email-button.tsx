"use client";
import { FC, memo } from "react";
import { Button } from "patryk/components/ui/button";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { EmailService } from "patryk/components/email/email-service";

export type EmailButtonProps = {
  email: string;
};

export const EmailButton: FC<EmailButtonProps> = memo(({ email }) => {
  return (
    <Button
      onClick={(event) => {
        EmailService.openEmail(email);
        event.preventDefault();
      }}
      variant="ghost"
    >
      <BsFillEnvelopeFill />
    </Button>
  );
});

EmailButton.displayName = "EmailButton";
