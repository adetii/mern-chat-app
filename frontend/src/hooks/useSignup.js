import { useState } from "react";
import toast from "react-hot-toast";

const useSignup = () => {
    const [loading, setLoading] = useState(false);

    const signup = async ({ fullName, username, password, confirmedPassword, gender, dob }) => {
        const success = handleInputErrors({ fullName, username, password, confirmedPassword, gender, dob });

        if (!success) return;

        setLoading(true);
        try {
            const res = await fetch('http://localhost:5500/api/auth/signup', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ fullName, username, password, gender, dob }) // Sending only required data
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message || "Signup failed");
            }

            toast.success("Signup successful!");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }        
    };

    return { signup, loading };
};

export default useSignup;

function handleInputErrors({ fullName, username, password, confirmedPassword, gender, dob }) {
    if (!fullName || !username || !password || !confirmedPassword || !gender || !dob) {
        toast.error('Please fill in all the fields');
        return false;
    }

    if (password !== confirmedPassword) {
        toast.error('Passwords do not match');
        return false;
    }

    if (password.length < 8) {
        toast.error('Password must be at least 8 characters');
        return false;
    }

    return true;
}
