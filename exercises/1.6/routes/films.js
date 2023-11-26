var express = require('express');
var router = express.Router();

const PocketBase = require("pocketbase/cjs")

const pb = new PocketBase('http://127.0.0.1:8090');


// example create data
const data = {
    "nom": "test_username",
    "prenom": "doe",
    "adresse": "la rue de la loi",
    "email": "test.user@lol.com",
    "mdp": "12345678",
    "is_admin": 0
};

const record = await pb.collection('users').create(data);

module.exports = router;
