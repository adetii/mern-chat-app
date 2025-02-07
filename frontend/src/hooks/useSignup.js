import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser} = useAuthContext();

    const signup = async ({ fullName, username, gender, dob, password, confirmedPassword }) => {
        // Trim input values to avoid extra spaces
        password = password.trim();
        confirmedPassword = confirmedPassword.trim();

        // Debugging: Console log values
        console.log("Password:", password);
        console.log("Confirmed Password:", confirmedPassword);

        if (!handleInputErrors({ fullName, username, gender, dob, password, confirmedPassword })) return;

        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, username, gender, dob, password, confirmedPassword })
            });

            const data = await res.json();
            if(data.error){
                throw new Error(data.error)
            }
            // console.log(data);
                localStorage.setItem("chat-user", JSON.stringify(data))
                setAuthUser(data);


            if (!res.ok) {
                throw new Error(data.error || data.message || "Signup failed");
            }

            toast.success("Signup successful!");
        } catch (error) {
            console.error("Signup Error:", error);
            toast.error(error?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return { loading, signup };
};

export default useSignup;

function handleInputErrors({ fullName, username, gender, dob, password, confirmedPassword }) {
    if (!fullName || !username || !gender || !dob || !password || !confirmedPassword) {
        toast.error("All fields are required.");
        return false;
    }

    if (password !== confirmedPassword) {
        console.error("Passwords do not match:", password, confirmedPassword);
        toast.error("Passwords do not match.");
        return false;
    }

    return true;
}