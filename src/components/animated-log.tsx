'use client'
import {motion} from "framer-motion";
import Image from "next/image";

export const AnimatedLogo = () => {
    return (
        <motion.div
            initial={{scale: 0}}
            animate={{rotate: 360, scale: 1}}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
            }}
        >
            <Image src="/beza.png" alt="me" width="32" height="32"/>
        </motion.div>
    )
}
