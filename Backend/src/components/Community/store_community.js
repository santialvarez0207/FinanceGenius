const { findByIdAndDelete } = require('../User/model_user');
const Model = require('./model_community')

async function getCommunity(parameter){
    let community = await Model.findone(parameter);
    return community;
}

async function addCommunity(community){
    let Mcommunity = new Model(community)
    await Mcommunity.save()
}


async function getCommunities(parameter){
    let communities = await Model.find();
    return communities;
}

async function deleteCommunity(parameter){
    await Model.findByIdAndDelete(parameter);
    return true
}

module.exports = {
    getCommunity,
    addCommunity,
    getCommunities,
    deleteCommunity,
}