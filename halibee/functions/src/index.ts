import * as functions from "firebase-functions";

const admin = require("firebase-admin")

admin.initializeApp()

exports.addFreelancerRole = functions.https.onCall((data, context) => {
    return admin.auth().getUserByEmail(data.email).then((user: { uid: string; }) => {
        return admin.auth().setCustomUserClaims(user.uid, {
            freelancer: true
        })
    }).then(() => {
        return{
            message: `Success! ${data.email} is now a Freelancer on HaLiBee`
        }
    }).catch((error: any) => {
        return error
    })
})