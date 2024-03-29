export function Intro({ title, intro }) {
  return (
    <>
      <h1 className="font-cal text-4xl font-bold text-zinc-800 sm:text-5xl">
        {title}
      </h1>
      <div className="mt-6 max-w-xl space-y-7 text-base text-zinc-600">
        <p>{intro}</p>
      </div>
    </>
  );
}
