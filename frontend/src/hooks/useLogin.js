import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();

    const login = async ({ username, password }) => {
        // Validate inputs
        if (!username || !password) {
            toast.error("Username and password are required.");
            return;
        }

        setLoading(true);
        try {
            // Send a POST request to the backend login endpoint
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password }),
            });

            const data = await res.json();

            // Handle backend errors
            if (data.error) {
                throw new Error(data.error);
            }

            // Save user data to localStorage and update global state
            localStorage.setItem("chat-user", JSON.stringify(data));
            setAuthUser(data);

            // Display success message
            toast.success("Login successful!");
        } catch (error) {
            // Display error message
            toast.error(error.message);
        } finally {
            // Reset loading state
            setLoading(false);
        }
    };

    return { loading, login };
};

export default useLogin;