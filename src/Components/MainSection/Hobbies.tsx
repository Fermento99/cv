import resume from '@/resume.json';

export default function Hobbies() {
  const { hobbies } = resume;

  return (
    <section>
      <h2>Hobbies:</h2>
      <ul className="grid grid-cols-2">
        {hobbies.map((hobby, index) => (
          <li key={index}>
            {hobby}
          </li>
        ))}
      </ul>
    </section>
  );
};
