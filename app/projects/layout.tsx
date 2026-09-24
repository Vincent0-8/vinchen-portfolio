import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Projects | Vincent Chen",
  description:
    "A complete archive of web applications, platforms, and client work developed by Vincent Chen. Filter by tech stack to explore specific technologies.",
  openGraph: {
    title: "All Projects | Vincent Chen",
    description:
      "A complete archive of web applications, platforms, and client work developed by Vincent Chen. Filter by tech stack to explore specific technologies.",
    url: "https://vincentchenn.com/projects",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
