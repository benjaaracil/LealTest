import mongoose from "mongoose";
const mongoDBClusterURI =
  "mongodb+srv://benjaminaracil:hS4NEou51SpzPBRn@clusterleal0.ygviqom.mongodb.net/LealTest?retryWrites=true&w=majority";

export async function connectMongo() {
  try {
    await mongoose.connect(mongoDBClusterURI);
    console.log("Successfully connected to mongoDB");
  } catch {
    (err: any) => console.log(err, "something is wrong");
  }
}
