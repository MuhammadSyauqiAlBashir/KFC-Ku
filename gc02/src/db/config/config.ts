import { MongoClient, ServerApiVersion } from "mongodb";
const uri = process.env.URI as string

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const database = client.db("gc02-KFC");