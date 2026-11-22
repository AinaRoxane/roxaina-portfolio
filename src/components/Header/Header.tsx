import { headerContent } from "./content";

const { logo, nav, dropdowns, email, socials } = headerContent;

const actionLinkClasses =
  "flex items-center text-gray-500 transition-colors duration-200 hover:text-black";

const actionIconProps = {
  viewBox: "0 0 24 24",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  className: "w-5 h-5",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
} as const;

function MailIcon() {
  return (
    <svg {...actionIconProps}>
      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg {...actionIconProps} fill="currentColor">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg {...actionIconProps} fill="currentColor">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function Dropdown({ label, items }: { label: string; items: ReadonlyArray<{ label: string; href: string }> }) {
  return (
    <div className="dropdown relative">
      <button className="hover:text-black transition-colors flex items-center gap-1 outline-none">
        {label}
        <ChevronIcon />
      </button>
      <div className="dropdown-menu">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <header role="banner" className="sticky top-0 z-50 bg-[#fafafa]/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        {/* Logo */}
        <a href="#" className="font-display font-bold text-xl tracking-tight hover:opacity-70 transition-opacity">
          {logo}
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-500 items-center">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-black transition-colors"
            >
              {item.label}
            </a>
          ))}
          {dropdowns.map((dropdown) => (
            <Dropdown key={dropdown.label} {...dropdown} />
          ))}
        </nav>

        {/* Right Side: Icons & Mobile Toggle */}
        <div className="flex items-center gap-5 text-gray-500">
          <div className="flex gap-4 items-center">
            <a href={`mailto:${email}`} aria-label="Email" className={actionLinkClasses}>
              <MailIcon />
            </a>
            <a
              href={socials.github}
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
              className={actionLinkClasses}
            >
              <GitHubIcon />
            </a>
            <a
              href={socials.linkedin}
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
              className={actionLinkClasses}
            >
              <LinkedInIcon />
            </a>

            {/* Mobile Hamburger Icon */}
            <label
              htmlFor="mobile-menu"
              className="md:hidden cursor-pointer hover:text-black transition-colors ml-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Pure CSS Slide-in) */}
      <input type="checkbox" id="mobile-menu" className="peer hidden" />

      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/20 opacity-0 pointer-events-none peer-checked:opacity-100 peer-checked:pointer-events-auto transition-opacity duration-300 z-40 md:hidden"></div>

      {/* Slide-over Menu (Right to Left) */}
      <div className="fixed top-0 right-0 h-screen w-80 bg-white z-50 transform translate-x-full peer-checked:translate-x-0 transition-transform duration-300 ease-out shadow-2xl md:hidden flex flex-col">
        <div className="p-6 flex justify-between items-center border-b border-gray-100">
          <span className="font-display font-bold text-lg">Menu</span>
          <label
            htmlFor="mobile-menu"
            className="cursor-pointer text-gray-500 hover:text-black"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </label>
        </div>

        <div className="p-6 flex flex-col gap-6 overflow-y-auto">
          <div className="flex flex-col gap-4">
            <a href="#" className="text-lg font-medium text-gray-900">
              Accueil
            </a>
            <a href="#about" className="text-lg font-medium text-gray-900">
              À propos
            </a>
            <a href="#stack" className="text-lg font-medium text-gray-900">
              Stack
            </a>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
              Expérience
            </h4>
            <div className="flex flex-col gap-3 pl-2 border-l border-gray-200">
              <a href="#exp-efanamby" className="text-gray-600 hover:text-blue-600 transition-colors">
                e-Fanamby
              </a>
              <a href="#exp-outlier" className="text-gray-600 hover:text-blue-600 transition-colors">
                Outlier.ai
              </a>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3">
              Projets
            </h4>
            <div className="flex flex-col gap-3 pl-2 border-l border-gray-200">
              <a href="#proj-mijery" className="text-gray-600 hover:text-blue-600 transition-colors">
                Mijery ID
              </a>
              <a href="#proj-chronicles" className="text-gray-600 hover:text-blue-600 transition-colors">
                Chronicles MG
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
