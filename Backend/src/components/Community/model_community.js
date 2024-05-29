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
    name: String,
    posts: [postSchema]
}, {
    versionKey: false,
    timestamps: false
});

module.exports = mongoose.model("Community", communitySchema);
