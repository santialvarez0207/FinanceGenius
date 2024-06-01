const express = require('express');
const response = require('../../network/response');
const controller = require('./controller_post');
const router = express.Router();

router.put('/:id', (req, res) => {
    let id = req.params.id;
    controller.updatePost(req.body, id)
        .then((message) => {
            response.success(req, res, message, 201);
        })
        .catch((e) => {
            response.error(req, res, "información incorrecta", e);
        });
});

router.post('/', (req, res) => {
    controller.addPost(req.body)
        .then((val) => {
            res.status(200).send(val)
        })
        .catch((e) => {
            response.error(req, res, "error al crear el post", e);
        });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    controller.getPost(id)
        .then((post) => {
            response.success(req, res, post, 201);
        })
        .catch((e) => {
            response.error(req, res, "no se obtuvieron los datos", e);
        });
});

router.get('/', (req, res) => {
    controller.getPosts()
        .then((posts) => {
            response.success(req, res, posts, 201);
        })
        .catch((e) => {
            response.error(req, res, "no se obtuvieron los datos", e);
        });
});

module.exports = router;
