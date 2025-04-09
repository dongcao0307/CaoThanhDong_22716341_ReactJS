import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function AddModal({ isOpen, onClose, onSave }) {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        orderValue: '',
        orderDate: '',
        status: 'New',
        avatar: 'https://i.pravatar.cc/150?img=' + Math.floor(Math.random() * 70),
    });

    useEffect(() => {
        if (isOpen) {
            setFormData({
                name: '',
                company: '',
                orderValue: '',
                orderDate: '',
                status: 'New',
                avatar: 'https://i.pravatar.cc/150?img=' + Math.floor(Math.random() * 70),
            });
        }
    }, [isOpen]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = () => {
        if (!formData.name || !formData.orderDate) {
            alert('Please fill in all required fields.');
            return;
        }
        onSave(formData);
    };

    return (
        <div
            className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${isOpen ? 'visible' : 'invisible'
                }`}
        >
            {/* Overlay */}
            <div
                className={`absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            />


            <div
                className={`fixed left-1/2 top-0 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${isOpen ? 'translate-y-1/2 opacity-100' : '-translate-y-full opacity-0'
                    } bg-white shadow-lg p-6 w-[90%] sm:w-[420px] rounded-xl`}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Add New Customer</h2>
                    <button onClick={onClose}>
                        <X className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <span className="block text-sm font-medium text-gray-700 mb-1">Name</span>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter customer name"
                            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-400"
                        />
                    </div>
                    <div>
                        <span className="block text-sm font-medium text-gray-700 mb-1">Company</span>
                        <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Enter company name"
                            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-400"
                        />
                    </div>
                    <div>
                        <span className="block text-sm font-medium text-gray-700 mb-1">Order Value</span>
                        <input
                            type="number"
                            name="orderValue"
                            value={formData.orderValue}
                            onChange={handleChange}
                            placeholder="Enter order value"
                            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-400"
                        />
                    </div>
                    <div>
                        <span className="block text-sm font-medium text-gray-700 mb-1">Order Date</span>
                        <input
                            type="date"
                            name="orderDate"
                            value={formData.orderDate}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-400"
                        />
                    </div>
                    <div>
                        <span className="block text-sm font-medium text-gray-700 mb-1">Status</span>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-pink-400"
                        >
                            <option value="New">New</option>
                            <option value="In-progress">In-progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-end mt-6 gap-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-100"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleSubmit}
                        className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}
