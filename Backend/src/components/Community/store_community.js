const Model = require('./model_community');

async function getCommunity(parameter) {
    let community = await Model.findOne(parameter);
    return community;
}

async function addCommunity(community) {
    let newCommunity = new Model(community);
    await newCommunity.save();
}

async function getCommunities() {
    let communities = await Model.find();
    return communities;
}

async function updateCommunity(community, id) {
    await Model.updateOne({ _id: id }, community);
}

module.exports = {
    getCommunity,
    addCommunity,
    getCommunities,
    updateCommunity
};
