


import React, { useContext } from "react";
import { AuthContext } from "../Provider/authProvider";
import { toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddHouse = () => {
    const { user } = useContext(AuthContext);

    const handleAddHouse = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const houseData = Object.fromEntries(formData.entries());

        fetch("http://localhost:5000/house", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(houseData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    toast.error("Fail top add a house", {
                        position: "top-center",
                        autoClose: 5000,
                        theme: "light",
                        transition: Bounce,
                    });
                    e.target.reset();
                } else {
                    toast.success("House added successfully!", {
                        position: "top-center",
                        autoClose: 5000,
                        theme: "light",
                        transition: Bounce,
                    });
                }
            })
            .catch((err) => {
                toast.error("Error adding house. Please try again.", {
                    position: "top-center",
                    autoClose: 5000,
                    theme: "light",
                    transition: Bounce,
                });
                console.error(err);
            });
    };

    return (
        <div className="flex justify-center items-center min-h-screen px-4 py-4 bg-gradient-to-t from-cyan-800 to-teal-400">
            <div className="md:w-2/3 w-full p-10 rounded-lg shadow-2xl bg-cyan-900 bg-opacity-80 text-white">
                <h2 className="text-center font-extrabold text-4xl mb-8">Add New House</h2>
                <form onSubmit={handleAddHouse} className="space-y-6">
                    <div>
                        <label className="block text-lg font-medium">Division</label>
                        <input
                            type="text"
                            name="division"
                            placeholder="e.g., Dhaka"
                            className="mt-2 p-3 w-full rounded-md border border-teal-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
                            required
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-lg font-medium">Demand (%)</label>
                            <input
                                type="number"
                                name="demandPercent"
                                placeholder="e.g., 85"
                                className="mt-2 p-3 w-full rounded-md border border-teal-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
                                required
                                min={0}
                                max={100}
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium">Average Rent</label>
                            <input
                                type="number"
                                name="avgRent"
                                placeholder="e.g., 15000"
                                className="mt-2 p-3 w-full rounded-md border border-teal-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
                                required
                                min={0}
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-lg font-medium">Population</label>
                            <input
                                type="number"
                                name="population"
                                placeholder="e.g., 8900000"
                                className="mt-2 p-3 w-full rounded-md border border-teal-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
                                required
                                min={0}
                            />
                        </div>
                        <div>
                            <label className="block text-lg font-medium">Available Listings</label>
                            <input
                                type="number"
                                name="avaiableList"
                                placeholder="e.g., 420"
                                className="mt-2 p-3 w-full rounded-md border border-teal-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
                                required
                                min={0}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-lg font-medium">Image URL (only link)</label>
                        <input
                            type="url"
                            name="img"
                            placeholder="https://i.ibb.co/example.jpg"
                            className="mt-2 p-3 w-full rounded-md border border-teal-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-teal-400"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-lg font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={user?.email || ""}
                            readOnly
                            className="mt-2 p-3 w-full rounded-md border border-teal-300 bg-white text-black"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full bg-teal-800 hover:bg-cyan-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 text-lg"
                        >
                            Add House
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddHouse;
