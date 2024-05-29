const express = require("express");
const router_user = require("../components/User/network_user");
const router_community = require("../components/Community/network_community");
const router_post = require("../components/Post/network_post");


const routes = function (server){
    server.use('/api/user', router_user)
    server.use('/api/community', router_community)
    server.use('/api/post', router_post)

}



module.exports = routes;