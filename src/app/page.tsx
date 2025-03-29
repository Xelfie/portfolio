/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css";
import Image from "next/image";

import { MyWorkShowcase } from "@/components/showcase/MyWorkShowcase";
import { SkillsAndHobbiesShowcase } from "@/components/showcase/SkillsAndHobbiesShowcase";

// PLAN:
// Night mode: parallax effect stars
// Day mode: parallax effect sunrays and/or clouds

export default function Home() {
  return (
    <>

      <main className={mainStyle}>
        <div className={contentStyle}>
          <div className={headerStyle}>
            <Image
              src="/assets/cloud1.png"
              alt="Cloud image"
              width={180}
              height={37}
            />

            <Image
              className={roundedImageStyle}
              src="/marine_dp2.png"
              alt="Next.js Logo"
              width={180}
              height={180}
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
    </>
  );
}

const containerStyle = css`
  height: 100vh;
  width: 100vw;
`;

const mainStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  padding: 24px;
`;

const contentStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 8px;
`;

const headerStyle = css`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;

  .dark & {
    filter: drop-shadow(0 0 0.3rem #ffffff70);
  }
`;

const roundedImageStyle = css`
  position: relative;
  border-radius: 50%;

  .dark & {
    filter: drop-shadow(0 0 0.3rem #ffffff70);
  }
`;
