import { MongoClient } from "mongodb";

const url = 'mongodb+srv://admin:admin@tutorial.mzfesy5.mongodb.net/?retryWrites=true&w=majority';
const options = { useNewUrlParser: true };
let connectDB;

connectDB = new MongoClient(url, options).connect();

export { connectDB };