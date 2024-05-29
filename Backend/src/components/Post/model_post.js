const mongoose = require("mongoose");
const { Schema } = mongoose;

const postSchema = new Schema({
    nameCreator: String,
    _idCreator: String,
    communityName: String,
    content: String,
    likes: Number
}, {
    versionKey: false,
    timestamps: false
});

module.exports = mongoose.model("Post", postSchema);
