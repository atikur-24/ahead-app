import logo from "@/assets/images/icons/logo.JPG";
import Image from "next/image";
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
      <Image width={60} src={logo} alt="logo" />
      <ul className="flex text-gray-700 gap-8">
        {navLinks.map(({ path, title, idx }) => (
          <li key={idx}>
            <Link className="font-medium" href={path}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <button className="primary-btn">Download app</button>
    </nav>
  );
};

export default Navbar;
