'use client'
import Image from 'next/image';
import {motion} from "framer-motion";
import Particles from "react-particles"
import {useCallback} from "react";
import type {Engine} from "tsparticles-engine";
import {ISourceOptions} from "tsparticles-engine";
import {loadSlim} from "tsparticles-slim";
import {AnimatedTextWord} from "patryk/components/animated-word";
import {Card, CardHeader, CardTitle} from "patryk/components/ui/card";
import {FaAngular, FaHtml5, FaReact} from "react-icons/fa";
import {SiEslint, SiNextdotjs, SiPrisma, SiReactivex, SiRedux, SiTailwindcss, SiTypescript} from "react-icons/si";
import {Button} from "patryk/components/ui/button";

const particlesOptions: ISourceOptions = {
    background: {
        color: {
            value: "transparent",
        },
    },
    fpsLimit: 120,
    interactivity: {
        events: {},
        modes: {
            push: {
                quantity: 2,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: {min: 1, max: 5},
        },
    },
    detectRetina: true
}

export default function Home() {
    // @ts-ignore
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    return (
        <div className="w-screen h-screen bg-origin-content text-primary overflow-hidden">
            <div className="w-full h-full container z-10 grid grid-cols-1 md:grid-cols-2">
                <div className="w-full z-10 h-full flex flex-col justify-between items-center row-span-1 ">
                    <div className="w-full h-full">
                    </div>
                    <div className="w-full h-full text-primary text-4xl flex my-5 md:my-0">
                        <div className="self-center">
                            <div className="flex gap-2">
                                <span>Patryk Krasuski</span>
                                <div
                                    className="w-10 h-10 rounded-full flex justify-center items-center from-red-600 to-purple-500 bg-gradient-to-r">
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
                                </div>
                            </div>
                            <span className="block">Frontend Developer</span>
                        </div>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col bg-muted mb-5 md:mb-0">
                    <div className="p-5">
                        <Card className="overflow-hidden">
                            <CardHeader>
                                <CardTitle>
                                    <AnimatedTextWord text="Contact with me"/>
                                </CardTitle>
                                <Card className="bg-muted overflow-hidden gap-3 grid grid-cols-2 justify-between items-center mb-3 z-20 p-2 px-3">
                                    <div className="shrink grow-0">krasuskipatryk94@gmail.com</div>
                                   <div className="flex items-center justify-end">
                                       <Button className="shrink-0 flex-none" variant="outline">Copy</Button>
                                   </div>
                                </Card>

                                <Card className="bg-muted flex justify-between items-center z-20 p-2 px-3">
                                    +48 530 044 418 <Button variant="outline">Copy</Button>
                                </Card>
                            </CardHeader>
                        </Card>

                        <Card className="overflow-hidden">
                            <CardHeader>
                                <CardTitle><AnimatedTextWord text="My expiriance"/></CardTitle>
                                <Card className="bg-muted z-20 p-2 px-3">
                                    BigPicture (Appfire)
                                </Card>

                                <Card className="bg-muted mb-3 z-20 p-2 px-3">
                                    ValueAdd
                                </Card>
                            </CardHeader>
                        </Card>

                        <Card className="overflow-hidden">
                            <CardHeader>
                                <CardTitle><AnimatedTextWord text="Technologies"/></CardTitle>
                                <Card className="bg-muted gap-3 z-20 p-2 flex items-center justify-center">
                                    <FaAngular/> <FaReact/> <SiNextdotjs/> <SiReactivex/> <SiTypescript/> <SiRedux/>
                                    <SiTailwindcss/> <FaHtml5/> <SiPrisma/> <SiEslint/>
                                </Card>
                            </CardHeader>
                        </Card>

                        <Card className="overflow-hidden">
                            <CardHeader>
                                <CardTitle><AnimatedTextWord text="Open for job requests"/></CardTitle>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </div>
            <Particles
                className="z-0"
                init={particlesInit}
                id="tsparticles"
                options={particlesOptions}/>

        </div>
    )
}
