import {AnimatedTextWord} from "patryk/components/animated-word";
import {Card, CardHeader, CardTitle} from "patryk/components/ui/card";
import {FaAngular, FaHtml5, FaReact} from "react-icons/fa";
import {SiEslint, SiNextdotjs, SiPrisma, SiReactivex, SiRedux, SiTailwindcss, SiTypescript} from "react-icons/si";
import {Button} from "patryk/components/ui/button";
import {ParticlesWrapper} from "patryk/components/particles-wrapper";
import {AnimatedLogo} from "patryk/components/animated-log";
import {Metadata} from "next";

// export const metadata: Metadata = {
//     title: 'Patryk Krasuski - Frontend Developer',
//     description: 'My name is Patryk Krasuski and I am a frontend developer. I am currently working at BigPicture (Appfire) as a frontend developer. I am open to job offers.',
// }

export default function Home() {

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
                                    <AnimatedLogo/>
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
                                <Card
                                    className="bg-muted overflow-hidden gap-3 grid grid-cols-2 justify-between items-center mb-3 z-20 p-2 px-3">
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
                                <CardTitle><AnimatedTextWord text="My experience"/></CardTitle>
                                <Card className="bg-muted z-20 p-2 px-3">
                                    BigPicture (Appfire) | April 2019–Present · 4 years 5 months
                                </Card>

                                <Card className="bg-muted mb-3 z-20 p-2 px-3">
                                    ValueAdd | April 2018 April 2019 · 1 year 1 month
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
                                <CardTitle><AnimatedTextWord text="I am open to job offers"/></CardTitle>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </div>
            <ParticlesWrapper/>

        </div>
    )
}
