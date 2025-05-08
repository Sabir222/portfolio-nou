import Projects from "@/components/work/projects/Projects";
import Studies from "@/components/work/studies/Studies";
import { Metadata } from "next";

export const metadata: Metadata = {
  //openGraph: {
  //  images: [
  //    {
  //      url: "https://www.sabirkoutabi.dev/api/og",
  //      width: 1200,
  //      height: 630,
  //    },
  //  ],
  //},
  //twitter: {
  //  card: "summary_large_image",
  //  title: "My Work",
  //  description: "Sabir Koutabi's Work",
  //  images: [`https://www.sabirkoutabi.dev/api/og`],
  //},
  title: "Projects",
  description: "Sabir Koutabi's Projects",
  alternates: {
    canonical: `https://sabirkoutabi.me/projects`,
  },
};
export default function Work() {
  return <main className="min-h-screen">
    <Projects />
    <Studies /></main>
}
