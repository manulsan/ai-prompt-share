import React from "react";

export { generateMetadata } from "./metadata";

export default function PostSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
