'use client'
import {FC} from "react";
import {Button} from "patryk/components/ui/button";
import {BsFillEnvelopeFill} from "react-icons/bs";

export type EmailButtonProps = {
    email: string
}

export const EmailButton: FC<EmailButtonProps> = ({email}) => {

    return (
        <Button onClick={(event) => {
            window.open(`mailto:${email}`);
            event.preventDefault();
        }} variant="ghost">
            <BsFillEnvelopeFill/>
        </Button>
    );
};
