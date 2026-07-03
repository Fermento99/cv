
import { ResumeContext } from '../../ResumeContext';
import { useContext, type ReactNode } from 'react';

interface GenericListProps {
  categoryName: string;
  children: ReactNode;
}

function GenericList({ children, categoryName }: GenericListProps) {
  return (
    <article className="flex flex-col shrink grow min-w-40">
      <h3 className="text-titleText-light mx-auto font-bold text-base">{categoryName}</h3>
      <ul>
        {children}
      </ul>
    </article>)
}

interface SkillCategoryProps { categoryName: string, list: string[] }

function SkillCategory({ categoryName, list }: SkillCategoryProps) {
  return (
    <GenericList categoryName={categoryName}>
      {list.map((item, index) => (
        <li key={index} className="text-listItem-light">
          {item}
        </li>
      ))}
    </GenericList>
  )
}

function LanguageList() {
  const { languages } = useContext(ResumeContext);

  return (
    <GenericList categoryName="Languages">
      {languages.map((item, index) => (
        <li key={index} className="text-listItem-light">
          {item.name} ({item.level})
        </li>
      ))}
    </GenericList>
  )
}

export default function Skills() {
  const {
    programmingLanguages,
    frameworks,
    databases,
    software
  } = useContext(ResumeContext);

  return (
    <section className="flex flex-row md:flex-col flex-wrap gap-4">
      <SkillCategory categoryName="Programming Languages" list={programmingLanguages} />
      <SkillCategory categoryName="Frameworks & Libraries" list={frameworks} />
      <SkillCategory categoryName="Databases" list={databases} />
      <SkillCategory categoryName="Software" list={software} />
      <LanguageList />
    </section>
  )
};
