var express = require('express');
var router = express.Router();

const PariwisataController = require("../Controller/nickolas");

router.post('/',PariwisataController.createPariwisata);

module.exports=router;

// nama proyek: Uts-PAW2-NickolasSu
// nama github: Nickolassu