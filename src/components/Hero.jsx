import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/hero.png";
import { motion } from "framer-motion";



const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="pb-16 text-6xl font-medium tracking-tight lg:mt-16 lg:text-8xl">
                            Sat Star
                        </motion.h1>

                        <motion.span
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="bg-gradient-to-r from-amber-800 via-green-400 to-lime-500 bg-clip-text lg:text-5xl text-3xl tracking-tight text-transparent">
                            Full Stack Developer
                        </motion.span>

                        <motion.p
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.5 }}
                            className="my-2 max-w-xl py-6 font-semibold tracking-tighter lg:text-2xl">
                            {HERO_CONTENT}
                        </motion.p>

                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.img
                            className="rounded-lg"
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 0.5 , delay: 0.5}}
                            src={profilePic} alt="Sat" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;