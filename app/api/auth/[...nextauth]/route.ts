import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import connectDB from "@/lib/mongodb";
import User from "@/models/User";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  cookies: {
    sessionToken: {
      name: `next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      // Initial sign in
      if (user) {
        await connectDB();
        const dbUser = await User.findOne({ email: user.email });
        if (dbUser) {
          token.id = dbUser._id.toString();
          token.role = dbUser.role || "User";
        }
      }

      // Update token on session update
      if (trigger === "update" && session) {
        await connectDB();
        const dbUser = await User.findOne({ email: token.email });
        if (dbUser) {
          token.role = dbUser.role || "User";
        }
      }

      return token;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async session({ session, token }) {
      if (session.user && token) {
        (session.user as any).id = token.id;
        (session.user as any).role = token.role || "User";
      }
      return session;
    },
    async signIn({ user, account, profile }) {
      if (!user?.email) {
        console.error("No email provided");
        return false;
      }

      try {
        console.log("Attempting sign in for:", user.email);

        await connectDB();
        console.log("Database connected successfully");

        // Check if user already exists
        const existingUser = await User.findOne({ email: user.email });

        // If not, create new user
        if (!existingUser) {
          const newUser = await User.create({
            email: user.email,
            name: user.name || "Unknown",
            image: user.image || "",
            role: "User",
          });
          console.log("New user created:", newUser.email);
        } else {
          console.log("User already exists:", existingUser.email);
        }

        return true;
      } catch (error: any) {
        console.error("Error during sign in:", error);
        console.error("Error message:", error.message);
        console.error("Error stack:", error.stack);
        // Return true anyway to allow sign in even if DB fails
        return true;
      }
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
