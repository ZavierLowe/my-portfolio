"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function ResponsiveNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '/#about', label: 'About' },
    
  ];

  return (
    <>
      {/* Bottom nav for mobile */}
      <nav className="fixed bottom-0 left-0 w-full px-5 bg-white/98  backdrop-blur-md  shadow-xs flex justify-around   md:hidden">

      <div id='wrapper' className=' w-full border-l border-[#C2C8D6]/50 border-r '>
      <div className='flex justify-between items-center px-4 py-4'>

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
      </div>

      </div>
      </nav>

      {/* Top nav for tablet/desktop */}
      <nav className="hidden md:flex fixed top-0 w-full backdrop-blur-sm   bg-white/98   shadow-md  px-4 md:px-5 lg:px-[140px]  z-50">
      <div className='  '>
          </div>

        <div id='wrapper' className=' w-full border-l border-[#C2C8D6]/50 border-r xl:mx-auto xl:max-w-7xl   '>
        <div className='flex justify-between items-center px-4 py-4     '>

        <div className=' '>
          <h5 className='text-xl font-semibold'>Zavier Lowe</h5>
        </div>
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
        </div>
    
        </div>

      </nav>
    </>
  );
}

