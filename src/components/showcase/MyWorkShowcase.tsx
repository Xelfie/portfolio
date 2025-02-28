function MyWorkShowcase() {
  return (
    <div className="w-full">
      <h2 className="p-4 text-center text-2xl">Check out some of my work!</h2>
      <div className="flex flex-row gap-8">
        <div className="w-1/2 rounded-lg border-2 p-2 dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
          My art
        </div>

        <div className="w-1/2 rounded-lg border-2 p-2 dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
          My photos
        </div>

        <div className="w-1/2 rounded-lg border-2 p-2 dark:drop-shadow-[0_0_0.3rem_#ffffff70]">
          Some web pages
        </div>
      </div>
    </div>
  );
}

export default MyWorkShowcase;
