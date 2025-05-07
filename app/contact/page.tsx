import Contact from "@/components/contact/Contact";

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
  //  title: "Contact Sabir Koutabi",
  //  description: "Contact Sabir Koutabi",
  //  images: [`https://www.sabirkoutabi.dev/api/og`],
  //},
  title: "Contact",
  description: "Contact Sabir Koutabi",
  alternates: {
    canonical: `https://sabirkoutabi.dev/contact`,
  },
};
const Page = () => {
  return (
    <div className="min-h-screen">
      <Contact />
    </div>
  );
};

export default Page;
