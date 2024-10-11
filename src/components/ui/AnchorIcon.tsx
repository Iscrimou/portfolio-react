import { ReactNode } from "react"

type AnchorIconProps = {
  url: string,
  title: string,
  className?: string,
  icon: ReactNode
}

export default function AnchorIcon({ url, title, className, icon }: AnchorIconProps) {
  return (
    <a className={`${className} hover:text-purple-300`} href={url} target="_blank" title={title}>
      { icon }
    </a>
  )
}
