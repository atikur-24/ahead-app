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
    <div className="navbar nav-container">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks.map(({ path, title, idx }) => (
              <li key={idx}>
                <Link className="font-medium" href={path}>
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Image width={60} src={logo} alt="logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks.map(({ path, title, idx }) => (
            <li key={idx}>
              <Link className="font-medium" href={path}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="primary-btn">Download app</button>
      </div>
    </div>
  );
};

export default Navbar;

{
  /* <nav className="flex justify-between items-center nav-container">
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
</nav> */
}
