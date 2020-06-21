var express = require('express');
var router = express.Router();

var firebase = require('../firebase');
var db = firebase.database();

// helper function to receive the data of the user
async function getUserData(uid) {
    var snapshot = await db.ref(`/users/${uid}`).once('value');
    
    return snapshot.val();
}

