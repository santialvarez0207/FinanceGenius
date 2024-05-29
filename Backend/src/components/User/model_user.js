const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
    _id: String,
    nameCreator: String,
    _idCreator: String,
    communityName: String,
    content: String,
    likes: Number
});

const communitySchema = new Schema({
    _id: String,
    name: String,
    posts: [postSchema]
});

const userSchema = new Schema({
    email: String,
    name: String,
    password: String,
    posts: [postSchema],
    follows: [communitySchema]
}, {
    versionKey: false,
    timestamps: false
});

module.exports = mongoose.model("User", userSchema);