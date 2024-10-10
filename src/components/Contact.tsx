import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import Title from "./ui/Title";

export default function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <Title className="my-10" title="Contato" />
      <motion.div
        whileInView={{ x:0, opacity: 1 }}
        initial={{ x: 100, opacity: 0 }}
        transition={{ duration: 0.5 }} 
        className="text-center tracking-tighter">
        <p className="my-4">
          <a className="border-b" href="https://api.whatsapp.com/send?phone=5521990685109" target="_blank">{ CONTACT.phoneNo }</a>
        </p>
        <p className="my-4">
          <a className="border-b" href="#">{ CONTACT.email }</a>
        </p>
      </motion.div>
    </div>
  )
}
