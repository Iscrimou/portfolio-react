import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import logo from "../assets/react.svg";

export default function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between p-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="flex justify-center items-center m-8 gap-4 text-2xl">
        <a className="hover:text-purple-300" href="https://www.linkedin.com/in/junior-oliveira-622a19213/" target="_blank" title="Linkedin">
          <FaLinkedin />
        </a>
        <a className="hover:text-purple-300" href="https://github.com/Iscrimou/" target="_blank" title="Github">
          <FaGithub />
        </a>
        <a className="hover:text-purple-300" href="https://www.instagram.com/_oliveirajunin/" target="_blank" title="Instagram">
          <FaInstagram />
        </a>
      </div>
    </nav>
  )
}