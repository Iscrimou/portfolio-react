import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import Title from "./ui/Title";

export default function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <Title className="my-20" title="Projetos" />
      <div>
        {PROJECTS.map((item, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{ x:0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4">
              <img src={item.image} alt={item.title} width={150} height={150} className="mb-6 rounded" />
            </motion.div>
            <motion.div
              whileInView={{ x:0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }} 
              className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{ item.title }</h6>
              <p className="mb-4 text-neutral-400">{ item.description }</p>
              {item.technologies.map((tech, index) => (
                <span className="rounded mr-2 mt-2 px-2 py-1 text-sm font-medium text-purple-800 bg-neutral-900 lg:mt-0" key={index}>{tech}</span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
