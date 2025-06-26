// components/Dashboard/Sidebar.jsx
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const navLinkStyle = ({ isActive }) =>
        isActive
            ? 'text-white bg-teal-800 p-2 rounded block'
            : 'text-gray-700 hover:bg-gray-200 p-2 rounded block';

    return (
        <div className="w-64 h-screen bg-gray-100 p-4 shadow-md">
            <nav className="flex flex-col gap-2">
                <NavLink to="/dashboard/rental/all-houses" className={navLinkStyle}>All Houses</NavLink>
                <NavLink to="/dashboard/rental/add-house" className={navLinkStyle}>Add House</NavLink>

                <NavLink to="/dashboard/rental/overview" className={navLinkStyle}>Overview</NavLink>
            </nav>
        </div>
    );
};

export default Sidebar;
