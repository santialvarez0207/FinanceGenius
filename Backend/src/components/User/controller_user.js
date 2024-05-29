const store = require("./store_user");

async function addUser(body) {
    try {
        if (!body) {
            return false;
        }
        let existingUser = await store.getUser({ email: body.email });
        if (existingUser) {
            return false;
        }

        let user = {
            email: body.email,
            name: body.name,
            password: body.password,
            posts: body.posts || [],
            follows: body.follows || []
        };
        await store.addUser(user);
        return true;
    } catch (error) {
        throw error;
    }
}

async function updateUser(body, id) {
    try {
        let user = {
            email: body.email,
            name: body.name,
            password: body.password,
            posts: body.posts || [],
            follows: body.follows || []
        };
        await store.updateUser(user, id);
        return "se actualizó correctamente";
    } catch (error) {
        throw error;
    }
}

async function getUser(id) {
    try {
        let user = await store.getUser({ _id: id });
        return user;
    } catch (error) {
        throw error;
    }
}

async function checkUser(email, password) {
    try {
        let user = await store.getUser({ email: email, password: password });
        if (email && password && user != null) {
            let session = {
                name: user.name,
                id: user._id,
                session: true
            };
            return session;
        } else {
            throw new Error("datos incorrectos");
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addUser,
    checkUser,
    getUser,
    updateUser
};
