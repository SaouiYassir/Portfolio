import {user} from '../models/admin.model.js'
import dotenv from 'dotenv'
import bcrypt from 'bcrypt'

dotenv.config();

export const addUser = async (req, res) => {
    try {

        const {username, email, password} = req.body;

        if(!username || !email || !password) {
            res.status(400).json({message: "All fields are required!"});
        }

        const existingUser = await user.findOne({
            $or: [
                { email: email },
                { username: username }
            ]
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

        const hashedPassword = await bcrypt.hash(password, parseInt(process.env.HASH_SALT));

        const newUser = await user.create({username, email, password: hashedPassword});

        res.status(200).json({message: "User added successfully...",
            user: {
                id: newUser._id,
                username: newUser.username,
                email: newUser.email
            }
        });

    } catch(err) {
        if (err.code === 11000) {
            // Fallback for race conditions (in case two requests hit at the exact same time)
            const field = Object.keys(err.keyPattern)[0];
            return res.status(409).json({ message: `${field} is already in use.` });
        }
        res.status(500).json({message: err.message})
    }
}