
import { NavLink } from "react-router-dom";
import { AuthContext } from "../components/provider/authProvider";
import logo from '../assets/logo.png';
import { useContext } from "react";

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext);


    const links = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? " bg-cyan-800 rounded-md text-white px-4 py-2 rounded-md" : "hover:bg-indigo-500 hover:underline px-4 py-2 rounded-md"}>Home</NavLink></li>

            {user && user.displayName && (
                <>
                    <li><NavLink to="/dashboard/rental" className={({ isActive }) => isActive ? "bg-teal-800 text-white px-4 py-2 rounded-md" : "hover:bg-indigo-500 hover:underline px-4 py-2 rounded-md"}>Rental</NavLink></li>
                </>
            )}
        </>
    );

    return (
        <div className=" sticky top-0 z-50 shadow-md ">
            {user && user.displayName && (
                <div className="bg-sky-700 text-center py-2 text-white">
                    Welcome, {user.displayName}!
                </div>
            )}

            <nav className="navbar bg-gradient-to-t from-cyan-800 to-teal-400 w-full">
                <div className="navbar-start flex items-center">
                    {/* Mobile Menu Button */}
                    <div className="dropdown">
                        <button tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </button>
                        <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-white dark:bg-gray-900 rounded-box w-52">
                            {links}
                        </ul>
                    </div>

                    {/* Logo */}
                    <NavLink to="/" className="flex items-center gap-2 btn btn-ghost normal-case text-lg md:text-xl font-bold">
                        <img className="w-10 h-10" src={logo} alt="logo" />
                        <p className="hidden md:block">Bangla House</p>
                    </NavLink>
                </div>

                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-4">{links}</ul>
                </div>

                {/* Navbar End: Buttons */}
                <div className="navbar-end flex items-center gap-4">
                    {/* Dark Mode Toggle */}
                    

                    {/* User Avatar */}
                    {user && user.photoURL && (
                        <div className="relative group">
                            <img src={user.photoURL} alt="User Avatar" className="w-8 h-8 rounded-full" />
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-75 py-1 px-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                                {user.displayName}
                            </div>
                        </div>
                    )}

                    {/* Auth Buttons */}
                    {user && user.displayName ? (
                        <button className="btn bg-teal-800 text-white px-3 py-1" onClick={signOutUser}>
                            Log Out
                        </button>
                    ) : (
                        <div className="flex gap-2">
                            <NavLink to="/register" className="btn bg-teal-900 text-white px-3 py-1">Sign Up</NavLink>
                            <NavLink to="/login" className="btn bg-teal-900 text-white px-3 py-1">Log In</NavLink>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;