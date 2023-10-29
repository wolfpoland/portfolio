"use client";
import { FC, memo } from "react";
import { Button } from "patryk/components/ui/button";
import { BsTelephoneFill } from "react-icons/bs";
import { TelephoneService } from "patryk/components/telephone/telephone-service";

export type TelephoneButtonProps = {
  phoneNumber: string;
};

export const TelephoneButton: FC<TelephoneButtonProps> = memo(
  ({ phoneNumber }) => {
    return (
      <Button
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
