import { footerContent } from "./content";

export default function Footer() {
  const { text, email, socials } = footerContent;

  return (
    <footer className="pt-12 pb-6 border-t border-line mt-20 text-center text-[0.9rem] text-muted">
      <p>{text}</p>
      <p className="mt-2">
        Email: <a href={`mailto:${email}`}>{email}</a>{" "}
        | GitHub: {socials.github}{" "}
        | LinkedIn: {socials.linkedin}
      </p>
    </footer>
  );
}
