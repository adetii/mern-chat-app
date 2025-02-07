import bcrypt from "bcryptjs";
import dayjs from "dayjs";
import User from "../models/user.models.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

// Signup function
export const signup = async (req, res) => {
    try {
        const { fullName, username, gender, dob, password, confirmedPassword } = req.body;

        // Validate passwords match
        if (password !== confirmedPassword) {
            return res.status(400).json({ error: "Passwords do not match." });
        }

        // Validate password strength
        if (password.length < 8) {
            return res.status(400).json({ error: "Password must be at least 8 characters long." });
        }

        // Validate date of birth
        if (!dob || !dayjs(dob, "YYYY-MM-DD", true).isValid()) {
            return res.status(400).json({ error: "Invalid date of birth format (YYYY-MM-DD expected)." });
        }

        // Check if username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists. Please choose another." });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Validate gender and assign a profile avatar
        const validGender = gender && (gender.toLowerCase() === "male" || gender.toLowerCase() === "female")
            ? gender.toLowerCase()
            : "male";

        const profile = validGender === "male"
            ? `https://avatar.iran.liara.run/public/boy?username=${username}`
            : `https://avatar.iran.liara.run/public/girl?username=${username}`;

        // Create new user
        const newUser = new User({
            fullName,
            username,
            gender: validGender,
            dob,
            password: hashedPassword,
            profile,
        });

        // Save user and generate token
        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                dob: newUser.dob,
                profile: newUser.profile,
            });
        } else {
            res.status(400).json({ error: "Invalid user data." });
        }
    } catch (error) {
        console.error("Error in signup controller:", error.message);
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// Login function
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if user exists
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ error: "Incorrect username or password. Please try again." });
        }

        // Validate password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Incorrect username or password. Please try again." });
        }

        // Generate token and set cookie
        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullName: user.fullName,
            username: user.username,
            dob: user.dob,
            profile: user.profile,
        });
    } catch (error) {
        console.error("Error in login controller:", error.message);
        res.status(500).json({ error: "Internal Server Error." });
    }
};

// Logout function
export const logout = (req, res) => {
    try {
        res.clearCookie("jwt", { httpOnly: true, secure: process.env.NODE_ENV === "production" });
        res.status(200).json({ message: "User logged out successfully." });
    } catch (error) {
        console.error("Error in logout controller:", error.message);
        res.status(500).json({ error: "Logout failed." });
    }
};
