import { connectToDatabase } from '../../../lib/db';

async function submitHandler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const client = await connectToDatabase();

    const db = client.db();

    const meetupsCollection = db.collection('jobs');

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    res.status(201).json({ message: 'Job Inserted!' });
  }
}
export default submitHandler;