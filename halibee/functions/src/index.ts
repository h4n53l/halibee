import * as functions from "firebase-functions";

import firebaseAdmin = require("firebase-admin");

firebaseAdmin.initializeApp();

exports.addFreelancerRole = functions.firestore
    .document("/newFreelancer/addNew")
    .onUpdate((snap, context) => {
      const userUID = snap.after.data().userUID;
      const category = snap.after.data().category;
      const hiveName = snap.after.data().hiveName;
      const skill = snap.after.data().skill;

      firebaseAdmin
          .auth()
          .setCustomUserClaims(userUID, {
            freelancer: true,
          })
          .catch((error: any) => {
            return error;
          });
      return firebaseAdmin.auth().getUser(userUID)
          .then((user) => {
            firebaseAdmin.firestore().doc("freelancers/"+user.uid)
                .set({
                  about: "I am a " + skill + ".",
                  bannerImageURL: "gs://halibee.appspot.com/images/defaultImages/banner-placeholder.png",
                  cardImageURL: "gs://halibee.appspot.com/images/defaultImages/profile_placeholder.png",
                  category,
                  description: "I am a " + skill + ".",
                  displayName: user.displayName,
                  hiveName,
                  projects: 0,
                  rating: 0,
                  skill,
                  uniqueID: user.uid,
                });
          });
    });

exports.createHiveRequest = functions.database
    .ref("{uid}/myProjects/{projectID}")
    .onCreate((snapshot, context) => {
      const clientProjectReference = context.params.projectID;
      const hireRequestData = snapshot.val();
      return firebaseAdmin.database()
          .ref(hireRequestData.freelancerUID + "/hireRequests")
          .push({
            ...hireRequestData,
            clientProjectReference,
          });
    });
