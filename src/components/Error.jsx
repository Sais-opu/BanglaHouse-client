import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div
            className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center px-4 md:px-8 lg:px-16 text-center w-full"
            style={{ backgroundImage: `url('https://i.ibb.co/7dZ6DsF5/eeerr.png')` }}
        >
            <Link to="/" className="px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-800 transition">
                Back to Home
            </Link>
        </div>
    );
};

export default Error;