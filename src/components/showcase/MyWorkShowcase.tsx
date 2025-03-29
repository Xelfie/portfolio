/** @jsxImportSource @emotion/react */
import { css } from "@emotion/css";
import PhotographyShowcase from "./PhotographyShowcase";

export const MyWorkShowcase = () => {
  return (
    <div className={containerStyle}>
      <h2 className={headingStyle}>Check out some of my work!</h2>
      <div className={flexRowStyle}>
        <div className={cardStyle}>My art</div>

        <PhotographyShowcase />

        <div className={cardStyle}>Some web pages</div>
      </div>
    </div>
  );
}

const containerStyle = css`
  width: 100%;
`;

const headingStyle = css`
  padding: 1rem;
  text-align: center;
  font-size: 2rem;
`;

const flexRowStyle = css`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const cardStyle = css`
  width: 50%;
  border-radius: 0.5rem;
  border: 2px solid;
  padding: 0.5rem;
  box-shadow: 0 0 0.3rem #ffffff70;
`;


