
// import { useEffect, useState } from "react";
// import Details from "./Details";
// import { toast, Bounce } from "react-toastify";

// const AllHouse = () => {
//     const [houses, setHouses] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [selectedHouse, setSelectedHouse] = useState(null);

//     const fetchHouses = () => {
//         setLoading(true);
//         fetch("https://banghouse.vercel.app/house")
//             .then((res) => res.json())
//             .then((data) => {
//                 setHouses(data);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 console.error("Failed to fetch house data:", err);
//                 setLoading(false);
//             });
//     };

//     useEffect(() => {
//         fetchHouses();
//     }, []);

//     const handleDelete = (id) => {
//         return fetch(`https://banghouse.vercel.app/house/${id}`, {
//             method: "DELETE",
//         })
//             .then((res) => res.json())
//             .then(() => {
//                 toast.error("House deleted successfully!", {
//                     position: "top-center",
//                     autoClose: 5000,
//                     theme: "light",
//                     transition: Bounce,
//                 });
//                 setSelectedHouse(null);
//                 fetchHouses();
//             })
//             .catch(() => {
//                 toast.error("Failed to delete house", {
//                     position: "top-center",
//                     autoClose: 5000,
//                     theme: "light",
//                     transition: Bounce,
//                 });
//             });
//     };

//     const handleUpdate = (updatedHouse) => {
//         return fetch(`https://banghouse.vercel.app/house/${updatedHouse._id}`, {
//             method: "PUT",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(updatedHouse),
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 if (data.message === "House updated successfully") {
//                     toast.success("House updated successfully!", {
//                         position: "top-center",
//                         autoClose: 5000,
//                         theme: "light",
//                         transition: Bounce,
//                     });
//                     setSelectedHouse(null);
//                     fetchHouses();
//                 } else {
//                     toast.error("Failed to update house.", {
//                         position: "top-center",
//                         autoClose: 5000,
//                         theme: "light",
//                         transition: Bounce,
//                     });
//                 }
//             })
//             .catch(() => {
//                 toast.error("Error updating house.", {
//                     position: "top-center",
//                     autoClose: 5000,
//                     theme: "light",
//                     transition: Bounce,
//                 });
//             });
//     };

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center h-screen">
//                 <div className="spinner-border animate-spin w-16 h-16 border-4 border-cyan-700 border-t-transparent rounded-full"></div>
//             </div>
//         );
//     }

//     return (
//         <div className="py-6 px-4 max-w-7xl mx-auto">
//             <h1 className="text-4xl font-bold text-center py-6 text-cyan-900">All Houses</h1>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                 {houses.map((house) => (
//                     <div
//                         key={house._id || house.id}
//                         className="bg-white rounded-lg shadow-xl p-4 flex flex-col justify-between"
//                     >
//                         <img
//                             src={house.img}
//                             alt={`House in ${house.division}`}
//                             className="w-full h-48 object-cover rounded-md mb-4"
//                         />
//                         <h2 className="text-2xl font-bold text-cyan-900 mb-2">{house.division}</h2>
//                         <p className="text-lg text-gray-700 mb-4">
//                             <strong>Rent:</strong> {house.avgRent} BDT
//                         </p>
//                         <button
//                             onClick={() => setSelectedHouse(house)}
//                             className="bg-teal-800 text-white py-2 px-4 rounded-md w-full hover:bg-cyan-800 transition"
//                         >
//                             View Details
//                         </button>
//                     </div>
//                 ))}
//             </div>

//             {/* Modal */}
//             {selectedHouse && (
//                 <Details
//                     house={selectedHouse}
//                     onClose={() => setSelectedHouse(null)}
//                     onDelete={handleDelete}
//                     onUpdate={handleUpdate}
//                 />
//             )}
//         </div>
//     );
// };

// export default AllHouse;

import { useEffect, useState } from "react";
import Details from "./Details";
import { toast, Bounce } from "react-toastify";

const AllHouse = () => {
    const [houses, setHouses] = useState([]);
    const [filteredHouses, setFilteredHouses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedHouse, setSelectedHouse] = useState(null);
    const [selectedDivision, setSelectedDivision] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        fetchHouses();
    }, []);

    const fetchHouses = () => {
        setLoading(true);
        fetch("https://banghouse.vercel.app/house")
            .then((res) => res.json())
            .then((data) => {
                setHouses(data);
                setFilteredHouses(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch house data:", err);
                setLoading(false);
            });
    };

    useEffect(() => {
        filterHouses();
    }, [selectedDivision, searchQuery, houses]);

    const filterHouses = () => {
        let filtered = houses;

        if (selectedDivision !== "All") {
            filtered = filtered.filter(house => house.division === selectedDivision);
        }

        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            filtered = filtered.filter(house =>
                Object.values(house).some(val =>
                    String(val).toLowerCase().includes(q)
                )
            );
        }

        setFilteredHouses(filtered);
    };

    const handleDelete = (id) => {
        return fetch(`https://banghouse.vercel.app/house/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then(() => {
                toast.error("House deleted successfully!", {
                    position: "top-center",
                    autoClose: 5000,
                    theme: "light",
                    transition: Bounce,
                });
                setSelectedHouse(null);
                fetchHouses();
            })
            .catch(() => {
                toast.error("Failed to delete house", {
                    position: "top-center",
                    autoClose: 5000,
                    theme: "light",
                    transition: Bounce,
                });
            });
    };

    const handleUpdate = (updatedHouse) => {
        return fetch(`https://banghouse.vercel.app/house/${updatedHouse._id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedHouse),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.message === "House updated successfully") {
                    toast.success("House updated successfully!", {
                        position: "top-center",
                        autoClose: 5000,
                        theme: "light",
                        transition: Bounce,
                    });
                    setSelectedHouse(null);
                    fetchHouses();
                } else {
                    toast.error("Failed to update house.", {
                        position: "top-center",
                        autoClose: 5000,
                        theme: "light",
                        transition: Bounce,
                    });
                }
            })
            .catch(() => {
                toast.error("Error updating house.", {
                    position: "top-center",
                    autoClose: 5000,
                    theme: "light",
                    transition: Bounce,
                });
            });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="spinner-border animate-spin w-16 h-16 border-4 border-cyan-700 border-t-transparent rounded-full"></div>
            </div>
        );
    }

    // Get unique divisions
    const divisions = ["All", ...new Set(houses.map(h => h.division))];

    return (
        <div className="py-6 px-4 max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-center py-6 text-cyan-900">All Houses</h1>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
                <select
                    className="border border-cyan-700 bg-white text-cyan-900 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-700 transition w-full md:w-1/3"
                    value={selectedDivision}
                    onChange={(e) => setSelectedDivision(e.target.value)}
                >
                    {divisions.map((division, index) => (
                        <option key={index} value={division}>{division}</option>
                    ))}
                </select>

                <input
                    type="text"
                    placeholder="Search anything..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border border-cyan-700 bg-white text-cyan-900 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-700 transition w-full md:w-1/2"
                />
            </div>

            {/* Houses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredHouses.map((house) => (
                    <div
                        key={house._id || house.id}
                        className="bg-white rounded-lg shadow-xl p-4 flex flex-col justify-between"
                    >
                        <img
                            src={house.img}
                            alt={`House in ${house.division}`}
                            className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-2xl font-bold text-cyan-900 mb-2">{house.division}</h2>
                        <p className="text-lg text-gray-700 mb-4">
                            <strong>Rent:</strong> {house.avgRent} BDT
                        </p>
                        <button
                            onClick={() => setSelectedHouse(house)}
                            className="bg-teal-800 text-white py-2 px-4 rounded-md w-full hover:bg-cyan-800 transition"
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal */}
            {selectedHouse && (
                <Details
                    house={selectedHouse}
                    onClose={() => setSelectedHouse(null)}
                    onDelete={handleDelete}
                    onUpdate={handleUpdate}
                />
            )}
        </div>
    );
};

export default AllHouse;

