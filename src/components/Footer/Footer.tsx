import { footerContent } from "./content";

const { text, links } = footerContent;

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>{text}</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-black transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
