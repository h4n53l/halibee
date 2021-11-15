// import * as functions from "firebase-functions";

// import firebaseAdmin = require("firebase-admin");

// firebaseAdmin.initializeApp();

// exports.addFreelancerRole = functions.firestore
//     .document("/newFreelancer/addNew")
//     .onUpdate((snap, context) => {
//       const userUID = snap.after.data().userUID;

//       firebaseAdmin
//           .auth()
//           .setCustomUserClaims(userUID, {
//             freelancer: true,
//           })
//           .catch((error: any) => {
//             return error;
//           });
//       return firebaseAdmin.auth().getUser(userUID)
//           .then((user) => {
//             functions.logger.info(user.displayName + " is now a freelancer.");
//           });
//     });

export {}
