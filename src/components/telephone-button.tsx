"use client";
import { FC } from "react";
import { Button } from "patryk/components/ui/button";
import { BsTelephoneFill } from "react-icons/bs";

export type TelephoneButtonProps = {
  phoneNumber: string;
};

export const TelephoneButton: FC<TelephoneButtonProps> = ({ phoneNumber }) => {
  return (
    <Button
      onClick={(event) => {
        window.open(`tel:${phoneNumber}`);
        event.preventDefault();
      }}
      variant="ghost"
    >
      <BsTelephoneFill />
    </Button>
  );
};
