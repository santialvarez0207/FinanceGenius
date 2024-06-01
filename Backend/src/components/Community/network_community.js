const express = require('express');
const response = require('../../network/response');
const controller = require('./controller_community');
const router = express.Router();

router.put('/:id', (req, res) => {
    let id = req.params.id;
    controller.updateCommunity(req.body, id)
        .then((message) => {
            response.success(req, res, message, 201);
        })
        .catch((e) => {
            response.error(req, res, "información incorrecta", e);
        });
});

router.post('/', (req, res) => {
    controller.addCommunity(req.body)
        .then((val) => {
            res.status(200).send(val)
        })
        .catch((e) => {
            response.error(req, res, "error al crear la comunidad", e);
        });
});

router.get('/:id', (req, res) => {
    let id = req.params.id;
    controller.getCommunity(id)
        .then((community) => {
            response.success(req, res, community, 201);
        })
        .catch((e) => {
            response.error(req, res, "no se obtuvieron los datos", e);
        });
});

router.get('/', (req, res) => {
    controller.getCommunities()
        .then((communities) => {
            response.success(req, res, communities, 201);
        })
        .catch((e) => {
            response.error(req, res, "no se obtuvieron los datos", e);
        });
});

module.exports = router;
