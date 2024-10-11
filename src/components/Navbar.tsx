import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import logo from "../assets/react.svg";
import AnchorIcon from "./ui/AnchorIcon";

export default function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between p-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="flex justify-center items-center m-8 gap-4 text-2xl">
        <AnchorIcon url="https://www.linkedin.com/in/junior-oliveira-622a19213/" title="Linkedin" icon={<FaLinkedin />}/>
        <AnchorIcon url="https://github.com/Iscrimou/" title="Github" icon={<FaGithub />}/>
        <AnchorIcon url="https://www.instagram.com/_oliveirajunin/" title="Instagram" icon={<FaInstagram />}/>
      </div>
    </nav>
  )
}