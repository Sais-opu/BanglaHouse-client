
import { useState } from "react";
import { toast, Bounce } from "react-toastify";

const Details = ({ house, onClose, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedHouse, setEditedHouse] = useState({ ...house });

    const handleChange = (e) => {
        setEditedHouse({ ...editedHouse, [e.target.name]: e.target.value });
    };

    const handleUpdate = () => {
        onUpdate(editedHouse)
            .then(() => {
                // toast.success("House updated successfully!", {
                //     position: "top-center",
                //     autoClose: 5000,
                //     theme: "light",
                //     transition: Bounce,
                // });
                setIsEditing(false);
            })
            .catch(() => {
                // toast.error("Failed to update house", {
                //     position: "top-center",
                //     autoClose: 5000,
                //     theme: "light",
                //     transition: Bounce,
                // });
            });
    };

    const handleDelete = () => {
        onDelete(house._id)
            .then(() => {
                // toast.error("House deleted successfully!", {
                //     position: "top-center",
                //     autoClose: 5000,
                //     theme: "light",
                //     transition: Bounce,
                // });
            })
            .catch(() => {
                // toast.error("Failed to delete house", {
                //     position: "top-center",
                //     autoClose: 5000,
                //     theme: "light",
                //     transition: Bounce,
                // });
            });
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 px-3">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-lg mx-auto relative overflow-y-auto max-h-[90vh] border border-teal-300">
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 text-white bg-red-600 hover:bg-red-800 transition rounded-full w-9 h-9 flex items-center justify-center shadow-md focus:outline-none"
                    aria-label="Close modal"
                >
                    ✕
                </button>

                <h2 className="text-3xl font-extrabold text-teal-900 mb-6 text-center tracking-wide">
                    {isEditing ? "Edit House" : "House Details"}
                </h2>

                <img
                    src={house.img}
                    alt="House"
                    className="w-full h-52 object-cover rounded-xl mb-6 shadow-lg border border-teal-400"
                />

                <div className="space-y-5">
                    {["division", "avgRent", "demandPercent", "population", "avaiableList", "img"].map(
                        (field) => (
                            <div key={field}>
                                <label className="block font-semibold capitalize text-teal-700 mb-1 select-none">
                                    {field}:
                                </label>
                                {isEditing ? (
                                    <input
                                        type={
                                            ["avgRent", "population", "demandPercent", "avaiableList"].includes(field)
                                                ? "number"
                                                : "text"
                                        }
                                        name={field}
                                        value={editedHouse[field]}
                                        onChange={handleChange}
                                        className="w-full rounded-lg border border-teal-300 bg-white text-teal-900 px-4 py-3 placeholder-teal-400 focus:outline-none focus:ring-4 focus:ring-teal-300 transition"
                                        placeholder={`Enter ${field}`}
                                    />
                                ) : (
                                    <p className="text-gray-900 text-lg font-medium">{house[field]}</p>
                                )}
                            </div>
                        )
                    )}
                </div>

                <div className="flex justify-between pt-8">
                    {isEditing ? (
                        <button
                            onClick={handleUpdate}
                            className="bg-gradient-to-r from-teal-700 to-cyan-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition transform hover:scale-105"
                        >
                            Save
                        </button>
                    ) : (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-gradient-to-r from-teal-700 to-cyan-600 hover:from-cyan-600 hover:to-teal-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition transform hover:scale-105"
                        >
                            Edit
                        </button>
                    )}

                    <button
                        onClick={handleDelete}
                        className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition transform hover:scale-105"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Details;
