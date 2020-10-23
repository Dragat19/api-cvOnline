import * as functions from 'firebase-functions';
import app from './config/app';

// import express,{Request,Response} from 'express';
// import * as admin from 'firebase-admin';


// interface ResponseData {
//     status: boolean;
//     message: string;
// }


// interface Work {
//     address: string;
//     company: string;
//     date: string;
//     employment:string
// }

// Express
//  const app = express();


//inicializar admin Firebase
// const serviceAccount = require("./onlinecv-3e683-firebase-adminsdk-xiuwd-1f14e96336.json");
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: "https://onlinecv-3e683.firebaseio.com"
// });

// const db = admin.firestore();
 
// app
// app.get('/', (req:Request,res:Response) => {
//     return res.json({
//         status:true,
//         message:'mi primera funcion' 
//     } as ResponseData)
// });


// app.post('/companys', (req: Request, res: Response) => {
//     (async () => {
//         const worksCreated = await db.collection('companys').add({
//             company: req.body.company,
//             address: req.body.address,
//             date: req.body.date,
//             employment: req.body.employment
//         } as Work);
//         return res.json({
//             status: 'ok',
//             id: worksCreated.id
//         });
//     })();
// }); 

export const api = functions.https.onRequest(app);


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
