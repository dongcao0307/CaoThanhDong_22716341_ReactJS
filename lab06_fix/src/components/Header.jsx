import { Bell, Search, HelpCircle } from "lucide-react";
import avatar from '../../public/img/Avatar (5).png'
import bell from '../../public/img/Bell 1.png'
import help from '../../public/img/Question 1.png'
export default function Header() {
  return (
    // <div className="flex justify-between items-center mb-6">
    //   <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
    //   <div className="flex items-center gap-4">
    //     <div className="relative">
    //       <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
    //       <input
    //         type="text"
    //         placeholder="Search..."
    //         className="pl-10 pr-4 py-2 border rounded-lg text-sm focus:outline-none"
    //       />
    //     </div>
    //     <div className="text-gray-600 cursor-pointer"> <img src={bell} alt="" /></div>
    //     <div className="text-gray-600 cursor-pointer">
    //       <img src={help} alt="" />
    //     </div>
    //     <div className="w-8 h-8 rounded-full bg-gray-300">
    //       <img src={avatar} alt="" />
    //     </div>
    //   </div>
    // </div>
    <div className="border border-col-6 flex justify-between items-center mb-6">
      <h1>Header</h1>
    </div>
  );
}
