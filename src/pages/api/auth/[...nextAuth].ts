import NextAuth from "next-auth/next";
import KaKaoProvider from "next-auth/providers/kakao";

export const authOptions = {
    providers: [
        KaKaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID,
            clientSecret: process.env.KAKAO_CLIENT_SECRET,
        }),
    ],
};

export default NextAuth(authOptions);
