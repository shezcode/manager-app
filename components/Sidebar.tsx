import Card from "./Card"
import SidebarLink from "./SidebarLink"
import { TLink } from "./SidebarLink"

const links: TLink[] = [
  { label: "Home", icon: "Grid", link: "/home"},
  { label: "Calendar", icon: "Calendar", link: "/calendar"},
  { label: "Settings", icon: "Settings", link: "/settings"},
]

const Sidebar = () => {
  return (
  <Card className="h-full w-40 flex items-center justify-between flex-wrap">
    {links.map((link) => (
      <SidebarLink
        key={link.label}
        label={link.label}
        icon={link.icon}
        link={link.link}/>
    ))}
  </Card>
  )
}

export default Sidebar