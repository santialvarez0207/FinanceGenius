const express = require('express');
const response = require('../../network/response');
const controller = require('./controller_user');
const router = express.Router();

router.put('/:id', (req, res) => {
    let id = req.params.id;
    controller.updateUser(req.body, id)
        .then((message) => {
            response.success(req, res, message, 200);
        })
        .catch((e) => {
            response.error(req, res, "información incorrecta", e);
        });
});

router.get('/check', (req, res) => {
    controller.checkUser(req.query.email, req.query.password)
        .then((session) => {
            response.success(req, res, session, 201);
        })
        .catch((e) => {
            response.error(req, res, "información incorrecta", e);
        });
});

router.post('/', (req, res) => {
    controller.addUser(req.body)
        .then((val) => {
            response.success(req, res, val, 201);
        })
        .catch((e) => {
            response.error(req, res, "error al crear el usuario", e);
        });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    controller.getUser(id)
        .then((user) => {
            response.success(req, res, user, 201);
        })
        .catch((e) => {
            response.error(req, res, "no se obtuvieron los datos", e);
        });
});

module.exports = router;
