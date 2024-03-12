import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { getSession } from "next-auth";
import prisma from "./connect";

import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
};

export const getAuthSession = () => getSession(authOptions);