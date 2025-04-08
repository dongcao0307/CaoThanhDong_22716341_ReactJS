import { ShoppingCart, DollarSign, UserPlus } from "lucide-react";

const stats = [
    {
        icon: <ShoppingCart size={20} className="text-pink-500" />,
        title: "Turnover",
        value: "$92,405",
        change: "+5.39%",
        bg: "bg-pink-50",
    },
    {
        icon: <DollarSign size={20} className="text-blue-500" />,
        title: "Profit",
        value: "$32,218",
        change: "+5.39%",
        bg: "bg-blue-50",
    },
    {
        icon: <UserPlus size={20} className="text-blue-500" />,
        title: "New customer",
        value: "298",
        change: "+6.84%",
        bg: "bg-blue-50",
    },
];

export default function OverviewCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {stats.map((stat, idx) => (
                <div key={idx} className={`rounded-xl p-4 ${stat.bg}`}>
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-gray-600 font-medium">{stat.title}</h2>
                        {stat.icon}
                    </div>
                    <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    <p className="text-sm text-green-500">{stat.change} period of change</p>
                </div>
            ))}
        </div>
    );
}
