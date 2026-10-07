import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Certifications | Vincent Chen",
  description:
    "Professional certifications, courses, and technical credentials.",
  openGraph: {
    title: "Certifications | Vincent Chen",
    description:
      "Professional certifications, courses, and technical credentials.",
    url: "https://vincentchenn.com/certifications",
  },
};

export default function CertificationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

