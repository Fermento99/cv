import resume from '@/resume.json';

export default function Contact () {
  const {
    email,
    profiles,
  } = resume;

  return (
    <section className="flex flex-col mt-1">
      <h2 className="text-titleText-light mx-auto">Contact</h2>
      <p className="text-listItem-light font-medium"><a href={`mailto:${email}`} target="_blank">{email}</a></p>
      {profiles.map((profile, index) => (
        <p key={index} className="text-listItem-light font-medium">
          <a href={profile.url} target="_blank">
            {profile.name}
          </a>
        </p>
      ))}
    </section>
  )
};
