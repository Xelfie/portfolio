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

function SkillsAndHobbiesShowcase() {
  return (
    <div>
      <div className="p-4 text-center text-2xl">
        <h2 className="text-2xl">
          I&apos;m a Jack of all trades, master of none
        </h2>
        <p className="pt-2 text-sm">
          ...but oftentimes better than a master of one!
        </p>
      </div>
      <div className="flex flex-col gap-4">
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

export default SkillsAndHobbiesShowcase;
