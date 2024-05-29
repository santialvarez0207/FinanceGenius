const Model = require('./model_user');

async function getUser(parameter) {
    let user = await Model.findOne(parameter);
    return user;
}

async function addUser(user) {
    let newUser = new Model(user);
    await newUser.save();
}

async function getUsers() {
    let users = await Model.find();
    return users;
}

async function updateUser(user, id) {
    await Model.updateOne({ _id: id }, user);
}

module.exports = {
    getUser,
    addUser,
    getUsers,
    updateUser
};
