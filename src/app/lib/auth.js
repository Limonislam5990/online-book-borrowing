import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient("mongodb+srv://Book-from-onlien:IuE4cjLYMIKLwc5l@cluster0.yagw1zi.mongodb.net/ONLINE-BOOK-BORROWING?retryWrites=true&w=majority");
const db = client.db("ONLINE-BOOK-BORROWING");

export const auth = betterAuth({
    database: mongodbAdapter(db),
    emailAndPassword: {
        enabled: true
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }
    }
});
