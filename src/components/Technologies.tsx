import { FaReact, FaLaravel, FaNodeJs, FaVuejs } from "react-icons/fa";
import { SiPhp, SiTypescript, SiJavascript } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

export default function Technologies() {
  const technologies = [
    {
      name: 'php',
      icon: <SiPhp className="text-7xl text-indigo-400" />,
      duration: 2.5
    },
    {
      name: 'laravel',
      icon: <FaLaravel className="text-7xl text-red-600" />,
      duration: 3
    },
    {
      name: 'node',
      icon: <FaNodeJs className="text-7xl text-green-500" />,
      duration: 5
    },
    {
      name: 'react',
      icon: <FaReact className="text-7xl text-cyan-400" />,
      duration: 2
    },
    {
      name: 'vue',
      icon: <FaVuejs className="text-7xl text-emerald-600" />,
      duration: 6
    },
    {
      name: 'ts',
      icon: <SiTypescript className="text-7xl text-blue-900" />,
      duration: 4
    },
    {
      name: 'js',
      icon: <SiJavascript className="text-7xl text-yellow-400" />,
      duration: 5.5
    },
  ]

  const iconVairant = (duration: number) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse" as const,
      }
    }
  })

  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
        whileInView={{x: 0, opacity: 1}}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }} 
        className="my-20 text-center text-4xl"
      >
        Tecnologias
      </motion.h1>
      <motion.div
        whileInView={{x: 0, opacity: 1}}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }} 
        className="flex flex-wrap items-center justify-center gap-4">
        <AnimatePresence>
          {
            technologies.map((item, index) => (
              <motion.div
                key={index}
                variants={iconVairant(item.duration)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4" title={ item.name }
              >
                { item.icon }
              </motion.div>
            ))
          }
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
