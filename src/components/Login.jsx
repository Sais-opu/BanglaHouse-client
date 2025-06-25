import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./provider/authProvider";
import { Bounce, toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc"; // Google Icon
import logImage from '../assets/login.png';
import { useRef } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase/firebase.init";


const Login = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const emailref=useRef()

    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle();
            navigate("/");
            toast.success('Login successful!', {
                position: "top-center",
                autoClose: 5000,
                theme: "light",
                transition: Bounce,
            });
        } catch (error) {
            toast.error('Google login failed. Please try again.', {
                position: "top-center",
                autoClose: 5000,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        if (!email || !password) {
            toast.error('Please enter both email and password.', {
                position: "top-center",
                autoClose: 5000,
                theme: "light",
                transition: Bounce,
            });
            return;
        }

        try {
            await signInUser(email, password);
            navigate('/');
            toast.success('Login successful!', {
                position: "top-center",
                autoClose: 5000,
                theme: "light",
                transition: Bounce,
            });
        } catch (error) {
            toast.error('Invalid email or password. Please try again.', {
                position: "top-center",
                autoClose: 5000,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    // forget password
    const handleForgetPassword=()=>{
        console.log('get me email address')
        const email =emailref.current.value;
        if(!email){
            alert('Please give valid email address')
        }
        else{
            sendPasswordResetEmail(auth,email)
            .then(() =>{
                alert("Password Reset email sent, Please check your email")
            })
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 p-5">
            <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-4xl bg-white shadow-lg rounded-lg p-6">
                {/* Image Section */}
                <div className="hidden md:flex justify-center">
                    <img src={logImage} alt="Login" className="w-80 h-auto object-cover" />
                </div>

                {/* Login Form */}
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl md:text-4xl text-black font-bold text-center md:text-left">Login Now & Race Towards Your Goals!</h1>
                    <form onSubmit={handleLogin} className="mt-6 space-y-4">
                        {/* Email Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black font-bold">Email</span>
                            </label>
                            <input ref={emailref} type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full bg-gradient-to-r from-teal-700 to-cyan-500" required onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        {/* Password Field */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-black  font-bold">Password</span>
                            </label>
                            <div className="relative">
                                <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter your password" className="input input-bordered w-full pr-10 bg-gradient-to-r from-teal-700 to-cyan-500" required />
                                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black">
                                    {showPassword ? "🙈" : "👁️"}
                                </button>
                            </div>
                            <label className="label">
                                <label onClick={handleForgetPassword} className="label-text-alt link link-hover text-black">
                                    Forgot password?
                                </label>
                            </label>
                        </div>

                        {/* Login Button */}
                        <div className="form-control mt-4">
                            <button type="submit" className="btn bg-gray-500 hover:bg-cyan-400 text-white w-full">Login</button>
                        </div>

                        {/* Google Sign-In */}
                        <div className="mt-3 text-center animate-bounce">
                            <hr />
                            <button type="button" onClick={handleGoogleSignIn} className="btn mt-5 btn-ghost border-black  hover:bg-cyan-800 hover:shadow-2xl bg-teal-600 hover:animate-pulse btn-outline w-full flex items-center justify-center space-x-2">
                                <FcGoogle className="text-2xl" />
                                <span>Login with Google</span>
                            </button>
                        </div>

                        {/* Register Link */}
                        <div className="text-center mt-4">
                            <p className="text-gray-600">Don't have an account? <Link to="/register" className=" hover:underline">Register now</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;