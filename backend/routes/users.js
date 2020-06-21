var express = require('express');
var router = express.Router();

var firebase = require('../firebase').default;
var db = firebase.database();

router.post('/:uid/transactions', (req, res) => {
    var uid = req.params.uid;
    
});

module.exports = router;