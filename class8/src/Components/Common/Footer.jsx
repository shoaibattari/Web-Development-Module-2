import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-300 py-2 mt-10 fixed bottom-0 w-full">
      <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <img
          src="https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?semt=ais_incoming&w=40&q=80"
          alt=""
        />

        {/* Copyright */}
        <p className="text-sm  text-black">
          © {new Date().getFullYear()} MyWebsite. All rights reserved.
        </p>

        <Link
          target="_blank"
          to={"https://github.com/shoaibattari"}
          className="text-black hover:underline underline-offset-2"
        >
          Shoaib Memon
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
