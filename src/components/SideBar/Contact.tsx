import { useContext } from 'react';
import { ResumeContext } from '../../ResumeContext';

export default function Contact() {
  const {
    email,
    profiles,
  } = useContext(ResumeContext);;

  return (
    <section className="flex flex-col mt-1">
      <h2 className="text-titleText-light mx-auto">Contact</h2>
      <p className={elementClassnames}><a href={`mailto:${email}`} target="_blank">{email}</a></p>
      {profiles.map((profile, index) => (
        <p key={index} className={elementClassnames}>
          <a href={profile.url} target="_blank">
            {profile.name}
          </a>
        </p>
      ))}
    </section>
  )
};

const elementClassnames = 'text-listItem-light font-medium text-center md:text-start';