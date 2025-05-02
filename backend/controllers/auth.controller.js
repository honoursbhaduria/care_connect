import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserModel from '../models/user.model.js';
import NeedfulModel from '../models/needful.model.js';
import VolunteerModel from '../models/volunteer.model.js';

import dotenv from 'dotenv';

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || 'yoursecretkey';


export const register = async (req, res) => {
  const { email, password, role } = req.body;

  try {
      const existingUser = await UserModel.findOne({ email });
      if (existingUser) return res.status(400).json({ message: 'User already exists' });

      const hashedPassword = await bcrypt.hash(password, 10);
      
      const user = await UserModel.create({ 
          email, 
          password: hashedPassword, 
          role: role || 'user' // Default to 'user' if role is not provided
      });
      
      // Create token for immediate login after registration
      const token = jwt.sign(
          { userId: user._id, role: user.role },
          JWT_SECRET,
          { expiresIn: '1d' }
      );

      res.status(201).json({ 
          message: 'User registered successfully',
          token,
          user: { email: user.email, role: user.role, id: user._id }
      });
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error during registration' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
      const user = await UserModel.findOne({ email });
      if (!user) return res.status(400).json({ message: 'Invalid credentials' });
      
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
      
      const token = jwt.sign(
          { userId: user._id, role: user.role },
          JWT_SECRET,
          { expiresIn: '1d' }
      );

      res.json({ token, user: { email: user.email, role: user.role, id: user._id } });
  } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error during login' });
  }
};

export default { login, register };