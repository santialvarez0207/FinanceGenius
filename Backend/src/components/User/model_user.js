const mongoose = require("mongoose");
const { Schema } = mongoose;



const userSchema = new Schema({
    email: String,
    name: String,
    password: String,
    posts: [String],
    follows: [String],
    likes: [String]
}, {
    versionKey: false,
    timestamps: false
});

module.exports = mongoose.model("User", userSchema);