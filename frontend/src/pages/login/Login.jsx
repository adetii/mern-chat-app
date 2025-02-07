import { useState } from 'react';
import { Link } from 'react-router-dom';
import useLogin from "../../hooks/useLogin"; // Import the useLogin hook
import toast from "react-hot-toast"; // Import toast for error messages

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const { loading, login } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!username || !password) {
            toast.error("Username and password are required.");
            return;
        }
        await login({ username, password });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen mx-auto">
            <div className="w-full p-6 bg-plaintiff-300 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-50 border border-gray-500">
                <h1 className="text-3xl font-semibold text-center text-gray-50">
                    Login <span className="text-blue-500">ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Username</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter username"
                            className="w-full input input-bordered h-10"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            aria-label="Username"
                        />
                    </div>

                    <div>
                        <label className="label p-2">
                            <span className="text-base label-text">Password</span>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            className="w-full input input-bordered h-10"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            aria-label="Password"
                        />
                    </div>

                    {/* "Don't have an account?" Link */}
                    <div className="text-center mt-3">
                        <p className="text-sm text-gray-200">
                            {"Don't"} have an account?{" "}
                            <Link to="/signup" className="text-blue-400 hover:underline">
                                Sign up here
                            </Link>
                        </p>
                    </div>

                    <div className="mt-4">
                        <button
                            type="submit"
                            className="w-full h-10 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
                            disabled={loading} // Disable the button when loading
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;