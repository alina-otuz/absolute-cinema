import bcrypt from "bcrypt";
import User from "../models/User.js";

export async function getProfile(req, res) {
  return res.json({ user: req.user });
}

export async function updateProfile(req, res, next) {
  try {
    const { username, email, password } = req.body;

    const updates = {};
    if (username !== undefined) updates.username = username;
    if (email !== undefined) updates.email = email;
    if (password !== undefined) updates.passwordHash = await bcrypt.hash(password, 12);

    // если меняем email — проверим уникальность
    if (email) {
      const exists = await User.findOne({ email, _id: { $ne: req.user._id } });
      if (exists) return res.status(409).json({ message: "Email already in use" });
    }

    const user = await User.findByIdAndUpdate(req.user._id, updates, {
      new: true,
      runValidators: true,
    }).select("_id username email role");

    return res.json({ user });
  } catch (e) {
    next(e);
  }
}
