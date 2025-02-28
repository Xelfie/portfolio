import Image from "next/image";

import MyWorkShowcase from "@/components/showcase/MyWorkShowcase";
import SkillsAndHobbiesShowcase from "@/components/showcase/SkillsAndHobbiesShowcase";

// PLAN:
// Night mode: parallax effect stars
// Day mode: parallax effect sunrays and/or clouds

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <div className="flex flex-col gap-8 px-2">
        <div className="flex w-full items-center gap-8 dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
          <Image
            className="relative rounded-full dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
            src="/marine_dp2.png"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
          <p>
            Hello! My name is Marine, but I like to go by Xelfie as my online
            persona :D
          </p>
        </div>

        <MyWorkShowcase />

        <SkillsAndHobbiesShowcase />
      </div>
    </main>
  );
}
