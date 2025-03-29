"use client";

import { useRouter } from "next/navigation";
import { cardStyle } from "./MyWorkShowcase";

function PhotographyShowcase() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/photography");
  };

  return (
    <button
      type="button"
      // className={cardStyle}
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      My photos
    </button>
  );
}

export default PhotographyShowcase;
