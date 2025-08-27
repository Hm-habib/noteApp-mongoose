const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema({
  userName: { type: String, required: true },
  Email: {
    type: String,
    required: [true, "Please provide your Email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please provide a valid email address",
    ],
    unique: true,
  },
  Password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: [6, "Password must be at least 6 characters long"],
    
  },
  phoneNumber: String,
  Address: String,
});

const userModel = mongoose.model("noteUsers", userSchema);
module.exports = userModel;
