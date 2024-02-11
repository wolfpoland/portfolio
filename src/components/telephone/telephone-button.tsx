"use client";
import { TelephoneService } from "patryk/components/telephone/telephone-service";
import { Button } from "patryk/components/ui/button";
import { FC, memo } from "react";
import { BsTelephoneFill } from "react-icons/bs";

export type TelephoneButtonProps = {
  phoneNumber: string;
};

export const TelephoneButton: FC<TelephoneButtonProps> = memo(
  ({ phoneNumber }) => {
    return (
      <Button
        aria-label="call"
        onClick={(event) => {
          TelephoneService.openTelephone(phoneNumber);
          event.preventDefault();
        }}
        variant="ghost"
      >
        <BsTelephoneFill />
      </Button>
    );
  },
);

TelephoneButton.displayName = "TelephoneButton";
