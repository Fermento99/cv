
import { ResumeContext } from '../../ResumeContext';
import { useContext } from 'react';
import { GenericList } from './GenericList';

interface SkillCategoryProps { categoryName: string, list: string[] }

function SkillCategory({ categoryName, list }: SkillCategoryProps) {
  return (
    <GenericList categoryName={categoryName}>
      {list.map((item, index) => (
        <li key={index}>
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
        <li key={index}>
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
    <section className="flex flex-col gap-4">
      <SkillCategory categoryName="Programming Languages" list={programmingLanguages} />
      <SkillCategory categoryName="Frameworks & Libraries" list={frameworks} />
      <SkillCategory categoryName="Databases" list={databases} />
      <SkillCategory categoryName="Software" list={software} />
      <LanguageList />
    </section>
  )
};
