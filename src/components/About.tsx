import { ABOUT } from "../constants";
import photo from "../assets/photo.jpg";
import { motion } from "framer-motion";
import Title from "./ui/Title";

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <Title className="my-20" title="Sobre mim"/>
      <div className="flex flex-wrap">
        <motion.div 
          whileInView={{ x:0, opacity: 1 }}
          initial={{ x: -100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center items-center">
          <img className="rounded-lg" src={photo} alt="Junior Oliveira" />
          </div>
        </motion.div>
        <motion.div 
          whileInView={{ x:0, opacity: 1 }}
          initial={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6"> { ABOUT } </p>
          </div >
        </motion.div>
      </div>
    </div>
  )
}
