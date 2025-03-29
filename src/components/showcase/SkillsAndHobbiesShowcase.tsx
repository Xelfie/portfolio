/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css";

const interests = [
  { icon: null, text: "Traveling" },
  { icon: null, text: "Drawing" },
  { icon: null, text: "Hiking" },
  { icon: null, text: "Photography" },
  { icon: null, text: "Music" },
  { icon: null, text: "Video Games" },
];
const skills = [
  { icon: null, text: "ReactJS" },
  { icon: null, text: "NodeJS" },
  { icon: null, text: "TypeScript" },
  { icon: null, text: "SQL" },
];

export const SkillsAndHobbiesShowcase = () => {
  return (
    <div>
      <div className={containerStyle}>
        <h2 className={headingStyle}>
          I&apos;m a Jack of all trades, master of none
        </h2>
        <p className={subTextStyle}>
          ...but oftentimes better than a master of one!
        </p>
      </div>
      <div className={listContainerStyle}>
        <p>
          My professional skills include:
          {skills.map((skill) => (
            <span key={skill.text}>
              <br /> • {skill.text}
            </span>
          ))}
        </p>
        <p>
          A non-exhaustive list of my interests because I have wayyy to many:
          {interests.map((interest) => (
            <span key={interest.text}>
              <br /> • {interest.text}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

const containerStyle = css`
  padding: 1rem;
  text-align: center;
  font-size: 1.5rem;
`;

const headingStyle = css`
  font-size: 1.5rem;
`;

const subTextStyle = css`
  padding-top: 0.5rem;
  font-size: 0.875rem;
`;

const listContainerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;