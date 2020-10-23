import * as admin from 'firebase-admin';

export let db: FirebaseFirestore.Firestore;
export class AppFirebase {

    public initDB(): void {
        const serviceAccount = require("../onlinecv-3e683-firebase-adminsdk-xiuwd-1f14e96336.json");
        admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
            databaseURL: "https://onlinecv-3e683.firebaseio.com"
        });
        db = admin.firestore(); 
        console.log('inicializo DB Firestore');
    }
}