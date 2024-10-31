import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialProvider from "next-auth/providers/credentials"
import connect from "@/utils/db";
import User from "@/models/User";
import bcryptjs from "bcryptjs";

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials){
                await connect();
                try {
                    const user = await User.findOne({email: credentials.email});
                    if(!user) throw new Error("User not found!");

                    const isPasswordCorrect = await bcryptjs.compare(credentials.password, user.password);
                    if(!isPasswordCorrect) throw new Error("Wrong Credentials!");
                    return user;
                } catch (error) {
                    throw new Error(error);
                }
            }
        })
    ],
    pages: "/dashboard/login"
});

export {handler as GET, handler as POST}