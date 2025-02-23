import { MongoClient } from 'mongodb';

let db;

async function connectToDb(cb) {
    const client = new MongoClient(`mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@my-react-blog.8eddr.mongodb.net/?retryWrites=true&w=majority&appName=My-React-Blog`);
    await client.connect();
    
    db = client.db('react-blog-db');
    cb();
};

export { db, connectToDb }