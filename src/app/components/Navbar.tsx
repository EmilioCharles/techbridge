// src/components/Navbar.tsx

import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold text-gray-800">
              TechBridge
            </Link>
          </div>

          {/* Sign In Button */}
          <div>
            <a
              href="#"
              className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};