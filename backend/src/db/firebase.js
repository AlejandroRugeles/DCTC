const admin = require('firebase-admin');
const serviceAccount = require('./dctc-974d9-52edf99cd5d0.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore(); 

module.exports = db;