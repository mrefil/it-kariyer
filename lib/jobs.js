import {connectToDatabase} from './db';

export async function postAJob(client, collection, document) {
    const db = connectToDatabase.db();
    const result = await db.collection(collection).insertOne(document);
    return result;
}