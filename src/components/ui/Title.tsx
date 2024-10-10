import { motion } from "framer-motion";

type TitleProps = {
  title: string,
  className?: string
}

export default function Title({ title, className }: TitleProps) {
  return (
    <motion.h1
      whileInView={{ x: 0, opacity: 1 }}
      initial={{ x: -100, opacity: 0 }}
      transition={{ duration: 1.5 }}
      className={`${className} text-center text-4xl`}
    >
      {title}
    </motion.h1>
  )
}
