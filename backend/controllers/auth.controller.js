import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import NeedfulProfile from '../models/NeedfulProfile.js';
import VolunteerProfile from '../models/VolunteerProfile.js';
import NGOProfile from '../models/NGOProfile.js';

const JWT_SECRET = process.env.JWT_SECRET || 'yoursecretkey';

export const register = async (req, res) => {
  const { email, password, role, profileData } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({ email, password: hashedPassword, role });

    // Create associated profile based on role
    switch (role) {
      case 'user':
        await NeedfulProfile.create({ user: user._id, ...profileData });
        break;
      case 'volunteer':
        await VolunteerProfile.create({ user: user._id, ...profileData });
        break;
      case 'NGO':
        await NGOProfile.create({ user: user._id, ...profileData });
        break;
      default:
        return res.status(400).json({ message: 'Invalid role' });
    }

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error during registration' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
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
