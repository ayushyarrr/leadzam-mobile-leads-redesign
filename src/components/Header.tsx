import { Briefcase, Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = ["Dashboard", "Leads", "Contacts", "Reports"];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2" aria-label="LeadZam home">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600">
            <Briefcase className="h-5 w-5 text-white" aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold text-gray-900">LeadZam</span>
        </a>

        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className={
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors " +
                    (link === "Leads"
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900")
                  }
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-gray-200 bg-white md:hidden"
          aria-label="Mobile primary"
        >
          <ul className="px-2 py-2">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className={
                    "block rounded-md px-3 py-2 text-sm font-medium " +
                    (link === "Leads"
                      ? "bg-blue-50 text-blue-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900")
                  }
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
