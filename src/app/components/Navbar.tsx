import Link from "next/link";
const Navbar = () => (
  <nav className="bg-green-700 text-white p-4 flex gap-4 rounded-lg shadow-md font-semibold">
      <Link href="/company">Companies</Link>
      <Link href="/employee">Employees</Link>
  </nav>
);
export default Navbar;