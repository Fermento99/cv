import resume from '@/resume.json';

export default function Summary() {
  const {
    name,
    workTitle,
    summary,
  } = resume;

  return (
    <section>
      <h1 className="text-4xl font-extrabold">{name}</h1>
      <h1 className="italic -mt-1">{workTitle}</h1>
      <p className="mt-2">{summary}</p>
    </section>
  );
};
