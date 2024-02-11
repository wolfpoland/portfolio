"use client";
import { EmailService } from "patryk/components/email/email-service";
import { Button } from "patryk/components/ui/button";
import { FC, memo } from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";

export type EmailButtonProps = {
  email: string;
};

export const EmailButton: FC<EmailButtonProps> = memo(({ email }) => {
  return (
    <Button
      aria-label="send email"
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
