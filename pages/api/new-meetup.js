import { MongoClient } from "mongodb";

// /api/new-meetup
// only POST requests
const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const client = await MongoClient.connect('mongodb+srv://norman:norman123@cluster0.sda8u.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    // insert a data document/object to the db
    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    // add some error handling

    // close connection
    client.close();
    res.status(201).json({message: 'Meetup inserted!'});

  }
};

export default handler;
