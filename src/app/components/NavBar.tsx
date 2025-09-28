"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ResponsiveNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/lab', label: 'Lab' },
  ];

  return (
    <>
      {/* Bottom nav for mobile */}
      <nav className="fixed bottom-0 left-0 w-full p-4 rounded-2xl bg-white border- shadow-md flex justify-around border-[#F4F4F4]  md:hidden">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm py-2 ${
              pathname === item.href ? 'text-blue-500 font-semibold' : 'text-gray-500'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Top nav for tablet/desktop */}
      <nav className="hidden md:flex fixed top-0 w-full  bg-white  shadow-md justify-center z-50">
        <ul className="flex space-x-8 p-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-gray-700 hover:text-blue-500 ${
                  pathname === item.href ? 'text-blue-500 font-semibold' : ''
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

