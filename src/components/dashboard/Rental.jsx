
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";

const Rental = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-4 bg-white min-h-screen">
                <Outlet />
            </div>
        </div>
    );
};

export default Rental;
