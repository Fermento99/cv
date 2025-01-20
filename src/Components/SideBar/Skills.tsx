import resume from '@/resume.json';

export default function Skills () {
  const {
    technologies,
    software,
  } = resume;
  return (
    <section>
      <SkillCategory categoryName="Technologies" list={technologies} />
      <SkillCategory categoryName="Software" list={software} />
    </section>
  )
};

function SkillCategory({ categoryName, list }: { categoryName: string, list: string[] }) {
  return (
    <article className="flex flex-col">
      <h3 className="text-titleText-light mx-auto">{categoryName}</h3>
      <ul>
        {list.map((item, index) => (
          <li key={index} className="text-listItem-light">
            {item}
          </li>
        ))}
      </ul>
    </article>
  )
}