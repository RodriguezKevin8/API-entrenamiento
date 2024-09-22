import User from "../models/User.js";
import bcrypt from 'bcrypt';

export default class UserController {
    
    static async createUser(req, res) {
        try {
          
            const userValidator = await User.findByEmail(req.body.email);

            if (userValidator) {
                return res.status(400).json({ error: "Email already exists" });
            }

           
            const user = await User.create(req.body);
            res.status(201).json(user);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async login(req, res) {
        try {
            
            const user = await User.login(req.body);

            if (!user) {
                return res.status(400).json({ error: "Invalid email or password" });
            }

           
            const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

            if (!isPasswordValid) {
                return res.status(400).json({ error: "Invalid email or password" });
            }

           
            const { password, ...userData } = user;

            res.status(200).json(userData);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}
