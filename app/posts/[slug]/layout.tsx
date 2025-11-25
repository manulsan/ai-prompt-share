import React from "react";

export default function PostSlugLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

// Note: For dynamic metadata based on post content, this would need to be a server component
// Currently the page.tsx is a client component, so metadata is inherited from parent layout
