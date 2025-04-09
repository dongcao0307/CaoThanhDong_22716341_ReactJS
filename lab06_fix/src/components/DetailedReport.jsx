import { useEffect, useState } from "react";
import EditModal from './EditModal';
import AddModal from "./AddModal";
import axios from "axios";
import DR from '../../public/img/File text 1.png';
import importImg from '../../public/img/Download.png';
import exportImg from '../../public/img/Move up.png';

const statusClasses = {
    "New": "bg-blue-100 text-blue-600",
    "In-progress": "bg-yellow-100 text-yellow-600",
    "Completed": "bg-green-100 text-green-600",
};

export default function DetailedReport() {
    const [data, setData] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        axios.get("https://67f5260e913986b16fa3738f.mockapi.io/customer")
            .then((res) => setData(res.data))
            .catch((err) => console.error("Error loading data:", err));
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentCustomers = data.slice(indexOfFirstItem, indexOfLastItem);

    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handleEdit = (customer) => {
        setSelectedCustomer(customer);
        setIsModalOpen(true);
    };

    const handleSave = async (updatedCustomer) => {
        try {
            await axios.put(`https://67f5260e913986b16fa3738f.mockapi.io/customer/${updatedCustomer.id}`, updatedCustomer);
            setData(prevData =>
                prevData.map(c => c.id === updatedCustomer.id ? updatedCustomer : c)
            );
            setIsModalOpen(false);
        } catch (error) {
            console.error("Update failed:", error);
        }
    };

    const handleAddCustomer = async (newCustomer) => {
        try {
            let formattedValue = newCustomer.orderValue.trim();
            if (!formattedValue.startsWith('$')) {
                formattedValue = '$' + Number(formattedValue).toLocaleString('en-US');
            }

            const [year, month, day] = newCustomer.orderDate.split('-');
            const formattedDate = `${day}/${month}/${year}`;

            const payload = {
                ...newCustomer,
                orderValue: formattedValue,
                orderDate: formattedDate,
            };

            const response = await fetch('https://67f5260e913986b16fa3738f.mockapi.io/customer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error('Failed to add customer');

            const addedCustomer = await response.json();
            setData(prev => [...prev, addedCustomer]);
            setIsAddModalOpen(false);
            alert('Customer added successfully!');
        } catch (error) {
            console.error('Error adding customer:', error);
            alert('Failed to add customer. Please try again.');
        }
    };

    return (
        <div className="bg-white rounded-xl p-4">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                    <img src={DR} alt="Logo" className="w-6 h-6 object-contain" />
                    <h2 className="text-lg font-bold text-gray-950">Detailed report</h2>
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => setIsAddModalOpen(true)}
                        className="border border-pink-500 flex items-center gap-2 text-pink-600 text-sm px-4 py-2 rounded-lg hover:bg-pink-100"
                    >
                        + Add
                    </button>
                    <button className="border border-pink-500 flex items-center gap-2 text-pink-600 text-sm px-4 py-2 rounded-lg hover:bg-pink-100">
                        <img src={importImg} alt="import" className="w-4 h-4" /> Import
                    </button>
                    <button className="border border-pink-500 flex items-center gap-2 text-pink-600 text-sm px-4 py-2 rounded-lg hover:bg-pink-100">
                        <img src={exportImg} alt="export" className="w-4 h-4" /> Export
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full text-sm">
                    <thead className="text-gray-500">
                        <tr>
                            <th className="text-left py-2 px-3"><input type="checkbox" /></th>
                            <th className="text-left py-2 px-3">CUSTOMER NAME</th>
                            <th className="text-left py-2 px-3">COMPANY</th>
                            <th className="text-left py-2 px-3">ORDER VALUE</th>
                            <th className="text-left py-2 px-3">ORDER DATE</th>
                            <th className="text-left py-2 px-3">STATUS</th>
                            <th className="text-left py-2 px-3">EDIT</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-700">
                        {currentCustomers.map((item) => (
                            <tr key={item.id} className="border-t">
                                <td className="py-2 px-3"><input type="checkbox" /></td>
                                <td className="py-2 px-3 font-medium flex items-center gap-2">
                                    <img src={item.avatar} alt={item.name} className="w-8 h-8 rounded-full object-cover" />
                                    {item.name}
                                </td>
                                <td className="py-2 px-3">{item.company}</td>
                                <td className="py-2 px-3">{item.orderValue}</td>
                                <td className="py-2 px-3">{item.orderDate}</td>
                                <td className="py-2 px-3">
                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusClasses[item.status]}`}>
                                        {item.status}
                                    </span>
                                </td>
                                <td className="py-2 px-3">
                                    <svg
                                        onClick={() => handleEdit(item)}
                                        className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15.232 5.232l3.536 3.536M9 11l6 6M3 21h6l11.293-11.293a1 1 0 000-1.414l-3.586-3.586a1 1 0 00-1.414 0L3 15v6z"
                                        />
                                    </svg>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="mt-4 flex justify-between items-center">
                    <p className="text-sm text-gray-500">{data.length} results</p>
                    <div className="flex items-center gap-1 text-sm">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 rounded-lg ${page === currentPage
                                    ? "bg-pink-500 text-white"
                                    : "text-gray-600 hover:bg-gray-100"}`}
                            >
                                {page}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Modals */}
            <EditModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSave={handleSave}
                customer={selectedCustomer}
            />
            <AddModal
                isOpen={isAddModalOpen}
                onClose={() => setIsAddModalOpen(false)}
                onSave={handleAddCustomer}
            />
        </div>
    );
}
