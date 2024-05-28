const store = require('./store_community')

async function addCommunity(body){
    try{
        if(!body){
            return false
        }
        let ExistingCommunity = await store.getCommunity({name : body.name})
        if(ExistingCommunity){
            return false
        }

        let community = {
            /** Pendiente añadir el modelo */
        }

        store.addCommunity(community)
        return true
    }catch(error){
        throw error
    }
}

async function getCommunity(id){
    try {
        let community = await store.getCommunity({_id: id});

        return community
    } catch (error) {
        throw error;
    }
}

async function getCommunities(){
    try {
        let communities = await store.getCommunities();
        return communities
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addCommunity,
    getCommunities,
    getCommunity
}