import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id?: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: "Admin" | "User";
    };
  }

  interface User {
    id?: string;
    role?: "Admin" | "User";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id?: string;
    role?: "Admin" | "User";
  }
}
