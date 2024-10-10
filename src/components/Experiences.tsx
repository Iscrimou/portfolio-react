import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import Title from "./ui/Title";

export default function Experiences() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <Title className="my-20" title="Experiências profissionais" />
      <div>
        {EXPERIENCES.map((item, index) => (
          <div key={index} className="flex flex-wrap mb-8 lg:justify-center">
            <motion.div 
              whileInView={{ x:0, opacity: 1 }}
              initial={{ x: -100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{item.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ x:0, opacity: 1 }}
              initial={{ x: 100, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">{item.role} -{" "}
                <span className="text-sm text-purple-100">
                  {item.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{item.description}</p>
              <div className="flex flex-wrap lg:block ">
                {item.technologies.map((tech, index) => (
                  <span className="rounded mr-2 mt-2 px-2 py-1 text-sm font-medium text-purple-800 bg-neutral-900 lg:mt-0" key={index}>{tech}</span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
