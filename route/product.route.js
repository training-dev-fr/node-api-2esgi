const express = require('express');
const router = express.Router();

router.get('/',() => {
    console.log("Récupération produit");
});
router.post('/',() => {
    console.log("Création produit");
});
router.put('/',() => {
    console.log("Modification produit");
});
router.delete('/',() => {
    console.log("Suppression produit");
});

module.exports = router;
