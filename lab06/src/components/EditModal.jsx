import React, { useState, useEffect } from "react";
import Modal from "react-modal";

Modal.setAppElement('#root');

export default function EditModal({ isOpen, onClose, onSave, customer }) {
    const [formData, setFormData] = useState({
        name: "",
        company: "",
        orderValue: "",
        orderDate: "",
        status: "New"
    });

    const formatForInputDate = (dateStr) => {
        const d = new Date(dateStr);
        if (isNaN(d)) return "";
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    };

    const formatForSave = (dateStr) => {
        const d = new Date(dateStr);
        const day = String(d.getDate()).padStart(2, "0");
        const month = String(d.getMonth() + 1).padStart(2, "0");
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
    };

    useEffect(() => {
        if (customer) {
            setFormData({
                name: customer.name || "",
                company: customer.company || "",
                orderValue: customer.orderValue || "",
                orderDate: formatForInputDate(customer.orderDate),
                status: customer.status || "New"
            });
        }
    }, [customer]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!customer) return;

        const updatedCustomer = {
            ...customer,
            ...formData,
            orderDate: formatForSave(formData.orderDate)
        };

        onSave(updatedCustomer);
        onClose();
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Edit Customer"
            style={{
                overlay: {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(6px)',
                    WebkitBackdropFilter: 'blur(6px)',
                    zIndex: 1000
                },
                content: {
                    maxWidth: '500px',
                    margin: 'auto',
                    borderRadius: '12px',
                    padding: '1rem',
                    backgroundColor: '#1f1f1f',
                    color: '#fff',
                    border: 'none',
                    gap: "0.75rem"
                }
            }}
        >
            <h2 className="text-xl font-semibold mb-4 text-white">Edit Customer</h2>
            <div className="flex flex-col gap-4 p-4">
                <div>
                    <span className="block text-sm font-medium text-gray-300 mb-1">Customer Name</span>
                    <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                </div>
                <div>
                    <span className="block text-sm font-medium text-gray-300 mb-1">Company</span>
                    <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Company"
                        className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                </div>
                <div>
                    <span className="block text-sm font-medium text-gray-300 mb-1">Order Value</span>
                    <input
                        name="orderValue"
                        value={formData.orderValue}
                        onChange={handleChange}
                        placeholder="Order Value"
                        className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                </div>
                <div>
                    <span className="block text-sm font-medium text-gray-300 mb-1">Order Date</span>
                    <input
                        name="orderDate"
                        type="date"
                        value={formData.orderDate}
                        onChange={handleChange}
                        className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                    />
                </div>
                <div>
                    <span className="block text-sm font-medium text-gray-300 mb-1">Status</span>
                    <select
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="border rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-pink-400"
                    >
                        <option value="New">New</option>
                        <option value="In-progress">In-progress</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
            </div>

            <div className="mt-6 flex justify-end gap-2">
                <button
                    onClick={onClose}
                    className="px-4 py-2 text-gray-400 border border-gray-500 rounded-md hover:bg-gray-700"
                >
                    Cancel
                </button>
                <button
                    onClick={handleSubmit}
                    className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600"
                >
                    Save
                </button>
            </div>
        </Modal>
    );
}
