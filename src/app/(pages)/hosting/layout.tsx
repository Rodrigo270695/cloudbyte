import type { Metadata } from "next";
import { metadata } from "./metadata";

export { metadata };

export default function HostingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 