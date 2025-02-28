"use client";

import { useRouter } from "next/navigation";

function PhotographyShowcase() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/photography");
  };

  return (
    <button
      type="button"
      className="w-1/2 cursor-pointer rounded-lg border-2 p-2 dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
      onClick={handleClick}
      onKeyDown={handleClick}
    >
      My photos
    </button>
  );
}

export default PhotographyShowcase;
