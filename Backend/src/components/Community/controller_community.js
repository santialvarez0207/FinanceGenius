const store = require("./store_community");

async function addCommunity(body) {
    try {
        if (!body) {
            return false;
        }
        let existingCommunity = await store.getCommunity({ name: body.name });
        if (existingCommunity) {
            return false;
        }

        let community = {
            name: body.name,
            posts: body.posts || []
        };
        await store.addCommunity(community);
        return true;
    } catch (error) {
        throw error;
    }
}

async function updateCommunity(body, id) {
    try {
        let community = {
            name: body.name,
            posts: body.posts || []
        };
        await store.updateCommunity(community, id);
        return "se actualizó correctamente";
    } catch (error) {
        throw error;
    }
}

async function getCommunity(id) {
    try {
        let community = await store.getCommunity({ _id: id });
        return community;
    } catch (error) {
        throw error;
    }
}

async function getCommunities() {
    try {
        let communities = await store.getCommunities();
        return communities;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addCommunity,
    getCommunity,
    getCommunities,
    updateCommunity
};
