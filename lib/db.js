import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI; // ضع URI الخاص بك في .env
const options = {};

let client;
let clientPromise;

if (!process.env.MONGO_URI) {
  throw new Error("Please add your Mongo URI to .env");
}

if (process.env.NODE_ENV === "development") {
  // في التطوير، استخدم نسخة واحدة متكررة لتجنب إعادة الاتصال
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // في الإنتاج
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
