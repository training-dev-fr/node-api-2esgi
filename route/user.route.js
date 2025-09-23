const express = require('express');
const router = express.Router();
const userController = require('./../controller/user.controller');

router.get('/',() => {
    console.log("Récupération utilisateur");
});

router.post('/',userController.signin);

router.put('/',() => {
    console.log("Modification utilisateur");
});
router.delete('/',() => {
    console.log("Suppression utilisateur");
});

module.exports = router;
