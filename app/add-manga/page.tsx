"use client"

import { useState } from "react";

export default function AddManga() {
    const [formData, setFormData] = useState({
        name: "",
        tom: "",
        stan: "",
        img: "",
        price: "",
        link: "",
    });

    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/add-manga", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const jsonData = await response.json();
            console.log(jsonData);
            const data = await response.json();
            if (response.ok) {
                setResponseMessage("Manga added successfully!");
                setFormData({ name: "",tom: "", stan: "", img: "", price: "", link: "" }); // Reset formularza
            } else {
                setResponseMessage(`Error: ${data.error}`);
            }
        } catch (error) {
            console.error("Error adding manga:", error);
            setResponseMessage("An error occurred while adding the manga.");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900">
            <h1 className="text-2xl font-bold mb-4">Dodaj mange</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-gray-700">Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full border text-neutral-950 border-gray-300 rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Tom:</label>
                    <input
                        type="text"
                        name="tom"
                        value={formData.tom}
                        onChange={handleChange}
                        className="w-full border text-neutral-950 border-gray-300 rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Stan:</label>
                    <input
                        type="text"
                        name="stan"
                        value={formData.stan}
                        onChange={handleChange}
                        className="w-full border text-neutral-950 border-gray-300 rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Image URL:</label>
                    <input
                        type="text"
                        name="img"
                        value={formData.img}
                        onChange={handleChange}
                        className="w-full border text-neutral-950 border-gray-300 rounded px-3 py-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        className="w-full border text-neutral-950 border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Link:</label>
                    <input
                        type="text"
                        name="link"
                        value={formData.link}
                        onChange={handleChange}
                        className="w-full border text-neutral-950 border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
                >
                    Add Manga
                </button>
            </form>
            {responseMessage && <p className="mt-4 text-gray-700">{responseMessage}</p>}
        </div>
    );
}
