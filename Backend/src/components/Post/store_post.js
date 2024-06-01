const Model = require('./model_post');

async function getPost(parameter) {
    let post = await Model.findOne(parameter);
    return post;
}

async function addPost(post) {
    let newPost = new Model(post);
    return await newPost.save();
}

async function getPosts() {
    let posts = await Model.find();
    return posts;
}

async function updatePost(post, id) {
    await Model.updateOne({ _id: id }, post);
}

module.exports = {
    getPost,
    addPost,
    getPosts,
    updatePost
};
