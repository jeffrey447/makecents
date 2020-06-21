var express = require('express');
var router = express.Router();

var firebase = require('../firebase').default;
var db = firebase.database();

var getUserData = (uid) => {
    var data = new Object();

    db.ref(`/users/${uid}`).once("value", (snapshot) => {
        snapshot.forEach((c) => {
           data[c.key] = c.val();
        });
    });

    return data;
};

router.post('/:uid/transactions', (req, res) => {
    var uid = req.params.uid;
    var userData = getUserData(uid);
    var transactions = userData.transactions || {};

    console.log(transactions);
    res.json({
        success: true,
        transactions: transactions
    });
});

router.post('/:uid/card/:token/add', (req, res) => {
    var uid = req.params.uid;
    var token = req.params.token;

    var userData = getUserData(uid);
    var transactions = userData.transactions || {};

    transactions[token] = {};

    db.ref(`/users/${uid}`).update({
        transactions: transactions
    }).then(() => {
        res.json({
            success: true,
            transactions: transactions
        });
    }).catch((error) => {
        res.json({
            success: false,
            error: error
        });
    });
});

module.exports = router;