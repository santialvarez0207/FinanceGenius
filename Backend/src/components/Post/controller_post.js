const store = require("./store_post");

async function addPost(body) {
    try {
        if (!body) {
            return false;
        }

        let post = {
            nameCreator: body.nameCreator,
            _idCreator: body._idCreator,
            communityName: body.communityName,
            content: body.content,
            title: body.title,
            likes: body.likes || 0
        };
        let data = await store.addPost(post);
        return data;
    } catch (error) {
        throw error;
    }
}

async function updatePost(body, id) {
    try {
        let post = {
            nameCreator: body.nameCreator,
            _idCreator: body._idCreator,
            communityName: body.communityName,
            content: body.content,
            title: body.title,
            likes: body.likes || 0
        };
        await store.updatePost(post, id);
        return "se actualizó correctamente";
    } catch (error) {
        throw error;
    }
}

async function getPost(id) {
    try {
        let post = await store.getPost({ _id: id });
        return post;
    } catch (error) {
        throw error;
    }
}

async function getPosts() {
    try {
        let posts = await store.getPosts();
        return posts;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addPost,
    getPost,
    getPosts,
    updatePost
};
