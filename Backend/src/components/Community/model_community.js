const mongoose = require("mongoose");
const { Schema } = mongoose;


const communitySchema = new Schema({
    name: String,
    posts: [String]
}, {
    versionKey: false,
    timestamps: false
});

module.exports = mongoose.model("Community", communitySchema);
