import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

import connectToDB from "@utils/database";

// console.log({
//     clientId: process.env.GOOGLE_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRETE,
// });

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRETE,
        })
    ],
    async session({ session }){

    },
    async sugnIn({ profile }){
        try{
            await connectToDB();

            // check if a user exists

            // if not, create a new user

            return true;
        }
        catch(error){
            console.log(error);
            return false;
        }
    }
});

export {handler as GET, handler as POST}