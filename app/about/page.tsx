import {
  TimelineContent,
  TimelineDescription,
  TimelineDot,
  TimelineHeading,
  TimelineItem,
  TimelineList,
} from "@/components/timeline/timeline";
import { Metadata } from "next";
export const metadata: Metadata = {
  //openGraph: {
  //  images: [
  //    {
  //      url: "https://www.sabirkoutabi.dev/api/og?title= About Sabir Koutabi",
  //      width: 1200,
  //      height: 630,
  //    },
  //  ],
  //},
  //twitter: {
  //  card: "summary_large_image",
  //  title: "My blog",
  //  description: "About Sabir Koutabi",
  //  images: [`https://www.sabirkoutabi.dev/api/og`],
  //},
  title: "About Sabir Koutabi",
  description: "Sabir Koutabi's background,work and hobbies.",
};

export default function About() {
  return (
    <main className="min-h-screen">
      <section id="about" className="mb-6">
        <p className="text-md mb-2 font-thin">
          Hi, I&apos;m <span className="font-semibold">Sabir Koutabi</span> — a Front-End Developer and Software Engineering.
        </p>
        <p className="text-md mb-2 font-thin">
          I transitioned from a career in finance, where I honed my analytical and problem-solving skills, to pursue my passion for tech.
        </p>
        <p className="text-md mb-2 font-thin">
          Now, I focus on building web applications, backend systems, and CLI tools, always striving to create clean and reliable software.
        </p>
        <p className="text-md mb-8 font-thin">
          I&apos;m dedicated to learning and growing with each project.
        </p>
      </section>

      <p className="mb-4">Info</p>
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="w-full border dark:bg-zinc-500/10 bg-[#F4F4F5] p-4 rounded-md  ">
          <p className="text-sm">Phone</p>
          <p className=" text-md font-thin">+212-762791354</p>
        </div>
        <div className="w-full border dark:bg-zinc-500/10 bg-[#F4F4F5] p-4 rounded-md  ">
          <p className="text-sm">Email</p>
          <p className=" text-md font-thin">sabirkoutabi@gmail.com</p>
        </div>
        <div className="w-full border dark:bg-zinc-500/10 bg-[#F4F4F5] p-4 rounded-md  ">
          <p className="text-sm">Adress</p>
          <p className=" text-md font-thin">Essaouira,Morocco</p>
        </div>
      </div>

      <p className="mb-4">Education</p>
      <TimelineList>
        <TimelineItem>
          <TimelineDot className="" />
          <TimelineContent>
            <TimelineHeading iconSrc={"/alx.jpg"}>Software Engineering Program – ALX Africa & Holberton School</TimelineHeading>
            <TimelineDescription>
              A rigorous 12-month program (2023–2024) focusing on front-end and full-stack development. Covered C, Python, JavaScript, React, SQL, and more. Sponsored by Mastercard.
            </TimelineDescription>
            <time className="text-xs text-muted-foreground mt-2 block">2023 – 2024</time>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineDot />
          <TimelineContent>
            <TimelineHeading iconSrc="/univercity.png">Bachelor&apos;s Degree in Finance and Banking</TimelineHeading>
            <TimelineDescription>
              Earned at the Higher School of Technology, Cadi Ayyad University. Focused on finance, management accounting, applied math, and tech in financial decision-making.
            </TimelineDescription>
            <time className="text-xs text-muted-foreground mt-2 block">2014 – 2017</time>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineDot />
          <TimelineContent>
            <TimelineHeading iconSrc="/med5.jpeg">Baccalauréat in Economics</TimelineHeading>
            <TimelineDescription>
              Graduated from Mohamed V High School in Essaouira, Morocco, with a strong foundation in economic theory and quantitative analysis.
            </TimelineDescription>
            <time className="text-xs text-muted-foreground mt-2 block">2013 – 2014</time>
          </TimelineContent>
        </TimelineItem>
      </TimelineList>
      <p className="mt-10 mb-4">Experience</p>
      <TimelineList>
        <TimelineItem>
          <TimelineDot className="bg-primary" />
          <TimelineContent>
            <TimelineHeading>Web Developer (Freelance)</TimelineHeading>
            <TimelineDescription>
              Independent contractor available for full-stack web development projects.</TimelineDescription>
            <time className="text-xs text-muted-foreground mt-2 block">2023 – Present</time>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineDot />
          <TimelineContent>
            <TimelineHeading iconSrc="yutapp.png">Front-End Developer Intern – Yutapp</TimelineHeading>
            <TimelineDescription>
              Contributed to feature development using React, Redux, and Styled Components. Collaborated closely with designers and backend engineers.
            </TimelineDescription>
            <time className="text-xs text-muted-foreground mt-2 block">Jan – Mar 2024</time>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="">
          <TimelineDot />
          <TimelineContent>
            <TimelineHeading iconSrc="/cih.png">Financial Operations Coordinator – CIH Bank</TimelineHeading>
            <TimelineDescription>
              Managed financial transactions and regulatory compliance. Led initiatives to optimize internal processes and improve cross-team coordination.
            </TimelineDescription>
            <time className="text-xs text-muted-foreground mt-2 block">2019 – 2023</time>
          </TimelineContent>
        </TimelineItem>
      </TimelineList>
      <p className="mt-10 mb-4">Certificates</p>
      <TimelineList>
        <TimelineItem>
          <TimelineDot className="" />
          <TimelineContent>
            <TimelineHeading iconSrc="/alx.jpg">Software Engineering Certificate – ALX Africa</TimelineHeading>
            <TimelineDescription>
              Completed a comprehensive 12-month program covering front-end and full-stack development. Covered C, Python, JavaScript, React, SQL, and more.
            </TimelineDescription>
            <time className="text-xs text-muted-foreground mt-2 block">2024</time>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className="mb-20">
          <TimelineDot />
          <TimelineContent>
            <TimelineHeading iconSrc="/aws.png">AWS Certified Cloud Practitioner (In Progress)</TimelineHeading>
            <TimelineDescription>
              Currently studying for the AWS Certified Cloud Practitioner exam to expand knowledge in cloud computing fundamentals and AWS services.
            </TimelineDescription>
            <time className="text-xs text-muted-foreground mt-2 block">2025 (Expected)</time>
          </TimelineContent>
        </TimelineItem>
      </TimelineList>
    </main>
  );
}
