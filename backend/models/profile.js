const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  bio: { type: String },
  social: {
    instagram: { type: String },
    youtube: { type: String },
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Profile", ProfileSchema);
