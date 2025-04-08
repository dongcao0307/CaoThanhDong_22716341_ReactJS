import { NavLink } from "react-router-dom";
import { Home, Folder, Users, BarChart2, MessageSquare, Settings } from "lucide-react";
import Logo from '../../public/img/Image 1858.png'
import V2 from '../../public/img/Selection (1).png'

const navItems = [
  { icon: <Home size={20} />, label: "Dashboard", path: "/" },
  { icon: <Folder size={20} />, label: "Projects", path: "/projects" },
  { icon: <Users size={20} />, label: "Teams", path: "/teams" },
  { icon: <BarChart2 size={20} />, label: "Analytics", path: "/analytics" },
  { icon: <MessageSquare size={20} />, label: "Messages", path: "/messages" },
  { icon: <Settings size={20} />, label: "Integrations", path: "/integrations" },
];

export default function Sidebar() {
  return (
    <aside className="bg-white border-r p-4 flex flex-col justify-between">
      <div>
        <div className="text-2xl font-bold text-pink-500 mb-8">
          <img
            src={Logo}
            alt="Logo"
            className="w-32 h-auto object-contain"
          />
        </div>
        <ul className="space-y-2">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-lg cursor-pointer transition-colors
                   ${isActive ? "bg-pink-100 text-pink-600 font-semibold" : "text-gray-600 hover:bg-pink-50"}`
                }
              >
                {item.icon}
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-sm text-gray-500">
        <div className="mb-2 bg-blue-50 p-4 rounded-xl flex flex-col items-center text-center">
          <img src={V2} alt="Version" />
          <p className="font-bold text-gray-950 text-center">V2.0 is available</p>
          <button className="mt-2 px-4 py-1 text-blue-600 border border-blue-400 rounded-md text-sm hover:bg-blue-100 transition items-center">
            Try now
          </button>
        </div>
      </div>
    </aside>
  );
}
