var express = require('express');
var router = express.Router();

var firebase = require('../firebase');
var db = firebase.database();

// we need to process the .env file
require('dotenv').config();

var plaid = require('plaid');
var client = new plaid.Client(
    process.env.REACT_APP_PLAID_CLIENT_ID,
    process.env.REACT_APP_SECRET,
    process.env.REACT_APP_PUBLIC_KEY,
    plaid.environments.sandbox
);

// helper function to receive the data of the user
async function getUserData(uid) {
    var snapshot = await db.ref(`/users/${uid}`).once('value');
    
    return snapshot.val();
}

// /:uid/getTransactions?startDate=<>&endDate=<>
router.get('/:uid/getTransactions', async (req, res) => {
    var uid = req.params.uid;
    var userData = await getUserData(uid);

    var startDate = req.query.startDate;
    var endDate = req.query.endDate;

    if ((startDate == null) || (endDate == null)) {
        // missing data

        res.json({
            success: false,
            error: "Provide a start and end date for the transactions that you would like to receive from the user."
        });
    } else {
        if (!userData) {
            res.json({
                success: false,
                error: "User not found."
            });
        } else {
            if (userData.bank && userData.bank.token) {
                try {
                    var res = await client.getTransactions(userData.bank.token, startDate, endDate);
                    var trans = res.transactions;
    
                    res.json({
                        success: true,
                        transactions: trans
                    });
                } catch (error) {
                    res.json({
                        success: false,
                        error: error
                    });
                }
            } else {
                res.json({
                    success: false,
                    error: "User has not connected a bank account."
                });
            }
        }
    }
});

router.get('/:uid/getAccounts', async (req, res) => {
    var uid = req.params.uid;
    var userData = await getUserData(uid);

    if (!userData) {
        res.json({
            success: false,
            error: "User not found."
        });
    } else {
        if (userData.bank && userData.bank.token) {
            try {
                var res = await client.getAccounts(userData.bank.token);
                var accs = res.accounts;

                res.json({
                    success: true,
                    accounts: accs
                });
            } catch (error) {
                res.json({
                    success: false,
                    error: error
                });
            }
        } else {
            res.json({
                success: false,
                error: "User has not connected a bank account."
            });
        }
    }
});

router.get('/:uid/createStripeToken', async (req, res) => {
    var uid = req.params.uid;
    var userData = await getUserData(uid);

    if (!userData) {
        res.json({
            success: false,
            error: "User not found."
        });
    } else {
        if (userData.bank && userData.bank.token && userData.bank.id) {
            try {
                var res = await client.exchangePublicToken(userData.bank.token);
                var accessToken = res.access_token;

                // now we generate a bank token
                res = await client.createStripeToken(accessToken, userData.bank.id);
                var bankToken = res.stripe_bank_account_token;

                res.json({
                    success: true,
                    bankToken: bankToken
                });
            } catch (error) {
                res.json({
                    success: false,
                    error: error
                });
            }
        } else {
            res.json({
                success: false,
                error: "User has not connected a bank account."
            });
        }
    }
});