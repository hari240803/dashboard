const Profile = require("../models/profile");

exports.getProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ userId: req.user.userId });
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

exports.addProfile = async (req, res) => {
  try {
    const { bio, instagram, youtube } = req.body;
    const profile = new Profile({
      userId: req.user.userId,
      bio,
      social: { instagram, youtube },
    });

    await profile.save();
    res.status(201).json(profile);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
