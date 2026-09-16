import { footerContent } from "./content";

export default function Footer() {
  return (
    <footer className="pt-12 pb-6 border-t border-line mt-20 text-center text-[0.9rem] text-muted">
      <p>{footerContent.text}</p>
    </footer>
  );
}
