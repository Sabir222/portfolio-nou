import RecentBlog from "@/components/blog/RecentBlog";
import HeroSection from "@/components/hero/Hero";
import Links from "@/components/links/LinksTwo";

export default function Home() {
  return <main className="min-h-screen">
    <HeroSection />
    <Links />
    <div className="mb-10"></div>
    <RecentBlog />
  </main>
}
