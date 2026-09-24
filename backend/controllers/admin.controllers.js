import { user } from "../models/admin.model.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import mongoose from "mongoose";

dotenv.config();

export const addAdmin = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.status(400).json({ message: "All fields are required!" });
    }

    const existingUser = await user.findOne({
      $or: [{ email: email }, { username: username }],
    });

    if (existingUser) {
      // Determine which one caused the conflict for a better error message
      if (existingUser.email === email) {
        return res.status(409).json({ message: "Email is already in use." });
      }
      if (existingUser.username === username) {
        return res.status(409).json({ message: "Username is already taken." });
      }
    }

    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.HASH_SALT),
    );

    const newUser = await user.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      message: "User added successfully...",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (err) {
    if (err.code === 11000) {
      // Fallback for race conditions (in case two requests hit at the exact same time)
      const field = Object.keys(err.keyPattern)[0];
      return res.status(409).json({ message: `${field} is already in use.` });
    }
    res.status(500).json({ message: err.message });
  }
};

export const loginAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      res.status(400).json({ message: "All fields are required!" });
    }

    const existingUser = await user.findOne({ username: username });

    if (!existingUser) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const checkPassword = await bcrypt.compare(password, existingUser.password);

    // 5. Handle case: wrong password
    if (!checkPassword) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    // 6. Success - return user info (optionally a JWT token later)
    res.status(200).json({
      message: "Login successful.",
      user: {
        id: existingUser._id,
        username: existingUser.username,
        email: existingUser.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid admin ID",
      });
    }

    // Delete admin
    const deletedAdmin = await user.findByIdAndDelete(id);

    // Admin doesn't exist
    if (!deletedAdmin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    // Success
    return res.status(200).json({
      success: true,
      message: "Admin deleted successfully.",
      data: deletedAdmin,
    });
  } catch (err) {
    console.error("Error deleting admin:", err);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
      error: err.message,
    });
  }
};