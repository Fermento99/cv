import { useContext } from "react";
import { ResumeContext } from "../../ResumeContext";
import Photo from "./Photo";

export default function Contact() {
  const { email, phoneNumber, profiles } = useContext(ResumeContext);

  return (
    <section>
      <Photo />
      <h2>Contact</h2>
      <p className={elementClassnames}>
        <a href={`mailto:${email}`} className="underline text-sm print:text-xs" target="_blank">
          {email}
        </a>
      </p>
      <p className={elementClassnames}>Tel: {phoneNumber}</p>
      {profiles.map((profile, index) => (
        <p key={index} className={elementClassnames}>
          <a href={profile.url} target="_blank">
            {profile.name}
          </a>
        </p>
      ))}
    </section>
  );
}

const elementClassnames = "text-listItem-light text-center md:text-start";
