import Link from "next/link";

const navLinks = [
  {
    path: "/",
    title: "Emotions",
  },
  {
    path: "/",
    title: "Manifesto",
  },
  {
    path: "/",
    title: "Self-awareness Test",
  },
  {
    path: "/",
    title: "Wok With Us",
  },
];

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center nav-container">
      <h1 className="text-2xl font-bold text-purple-500">Logo</h1>
      <ul className="flex gap-8">
        {navLinks.map(({ path, title }) => (
          <li key={path}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
      <button className="primary-btn">Download app</button>
    </nav>
  );
};

export default Navbar;
