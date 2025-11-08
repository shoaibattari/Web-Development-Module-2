import { Link } from "react-router-dom";

const Navbar = () => {
  const NavLinks = [
    { name: "Home", link: "/" },
    { name: "Products", link: "/products" },
    // { name: "Services", link: "/services" },
    // { name: "Contact", link: "/contact" },
  ];

  return (
    <nav className="bg-gray-50 text-black px-6 py-3 w-full">
      <div className="flex justify-between items-center">
        <div className="w-full ">
          <img
            src="https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?semt=ais_incoming&w=40&q=80"
            alt=""
          />
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          {NavLinks.map((nav, index) => (
            <li key={index}>
              <Link
                to={nav.link}
                className="hover:text-gray-300 text-xl transition-colors"
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
