import bcrypt from "bcrypt";
import NextAuth, { AuthOptions, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { redis } from "patryk/redis";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        key: { label: "key", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.key) {
          return null;
        }

        const key = await redis.get<string>("auth-key");

        if (!key) {
          return null;
        }

        const hashesMatched = await bcrypt.compare(credentials.key, key);

        const user = {} as User;

        if (hashesMatched) {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth",
    signOut: "/auth",
    error: "/auth",
    newUser: "/auth",
    verifyRequest: "/auth",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
