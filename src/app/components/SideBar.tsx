import Link from 'next/link';

export default function Sidebar() {
  return (
   <aside className="left-0 top-0 h-full w-60 bg-gray-100 p-6 hidden md:flex flex-col">
  <h2 className="text-2xl font-bold mb-8">Zavier Lowe</h2>
  <nav className="flex flex-col space-y-4">
    <Link href="/">Home</Link>
    <Link href="/">Home</Link>
    <Link href="/">Home</Link>
    <Link href="/">Home</Link>
   
   
  </nav>
</aside>
  );
}
