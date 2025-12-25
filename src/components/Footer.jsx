import React from "react";

/**
 * Footer Component
 * Minimal footer with subtle heart decoration
 */
const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-neutral-100">
      <div className="max-w-4xl mx-auto text-center">
        {/* Simple heart decoration */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-px bg-neutral-200" />
          <span className="text-accent text-lg">♡</span>
          <span className="w-8 h-px bg-neutral-200" />
        </div>

        {/* Message */}
        <p className="text-neutral-400 text-sm font-light">
          Made with love, just for you
        </p>

        {/* Year */}
        <p className="text-neutral-300 text-xs mt-2">
          {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
