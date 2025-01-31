// auth.controllers.js
import bcrypt from 'bcryptjs';
import User from "../models/user.models.js";
import generateTokenAndSetCookie from '../utils/generateToken.js';

// Signup function (requiring dob)
export const signup = async (req, res) => {
    try {
        const { fullname, username, password, confirmPassword, gender, dob } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords don't match" });
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const validGender = gender && (gender.toLowerCase() === "male" || gender.toLowerCase() === "female")
            ? gender.toLowerCase()
            : "male";

        const profile = validGender === "male"
            ? `https://avatar.iran.liara.run/public/boy?username=${username}`
            : `https://avatar.iran.liara.run/public/girl?username=${username}`;

        const newUser = new User({
            fullname,
            username,
            password: hashedPassword,
            gender: validGender,
            dob,  // Added date of birth
            profile,
        });

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullname: newUser.fullname,
                username: newUser.username,
                dob: newUser.dob, // Sending date of birth in response
                profile: newUser.profile,
            });
        } else {
            res.status(400).json({ error: "Invalid user data" });
        }
    } catch (error) {
        console.error("Error in signup controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Login function (requiring dob)
export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await User.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ error: "Invalid username or password" });
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id: user._id,
            fullname: user.fullname,
            username: user.username,
            dob: user.dob, // Sending date of birth in response
            profile: user.profile,
        });
    } catch (error) {
        console.error("Error in login controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// Logout function
export const logout = (req, res) => {
    res.clearCookie("jwt");
    res.status(200).json({ message: "User logged out successfully" });
};
