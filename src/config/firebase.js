const admin = require("firebase-admin");

// Load service account key JSON (replace with your file path)
const serviceAccount = require("../../ServiceAccountKey.json");

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Get Firestore instance
const db = admin.firestore();
module.exports = db;
