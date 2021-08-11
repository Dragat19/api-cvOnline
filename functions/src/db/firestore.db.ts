import { QueryDocumentSnapshot } from "firebase-functions/lib/providers/firestore";
import { db } from "./firebase";

export class FirestoreDB {

    private static instance: FirestoreDB;

    constructor() {}

    public static getInstance(): FirestoreDB {
        if (!this.instance) {
            console.log('initial singleton Firestore');
            return (this.instance = new FirestoreDB());
        }
        return this.instance;
    }

    public async create<T>(name:string,data:T): Promise<string> {
        const created = await db.collection(name).add(data);
        return created.id;
    }

    public async update<T>(name: string, data: T, id:string , callback:Function): Promise<void> {
        const updated = await db.collection(name).doc(id);
        updated.set(data);
        callback(id);
    }

    public async delete(name: string, id:string,callback:Function): Promise<void> {
        const deleted = await db.collection(name).doc(id);
        deleted.delete();
        callback(id);
    }

    public async get(name: string): Promise<any> {
        const got = await db.collection(name).get();
        const data = await got.docs.map((doc: QueryDocumentSnapshot) => {
            let dataFb = doc.data();
            return {
                id: doc.id,
                ...dataFb
            }
        });
        return data;
    }
}