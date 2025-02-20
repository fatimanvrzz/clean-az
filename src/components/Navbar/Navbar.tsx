import Logo from "../../assets/images/logo.png";
import BurgerMenu from "../../assets/images/burger-menu.svg"
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { GoX } from "react-icons/go";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false)


  return (
    <div className="flex items-center cursor-pointer">
      <div className="flex items-center mt-[33px] w-[1300px] justify-between">

        {/* Logo */}
        <div className="flex 2xl:block xl:block lg:block md:block sm:block text-center">
          <div className="mx-auto">
            <Link to='/'>
              <img
                src={Logo} alt="Logo" className="w-auto max-w-[146px] sm:max-w-[120px] md:max-w-[100px] lg:max-w-[130px]"
              />
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-[41px] lg:gap-[30px] md:gap-[10px]">
            <li>
              <Link className="flex items-center" to='/services'>
                Services <IoIosArrowDown />
              </Link>
            </li>
            <li>
              <Link to='/about-us'>About Us</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </div>

        {/* Translate and Book a Service section*/}
        <div className="flex items-center">
          <div className="hidden md:flex gap-[29px]">
            <div className="flex items-center">
              En <IoIosArrowDown />
            </div>
            <div className="bg-[#0F42FF] rounded-2xl px-10 py-4 ">
              <Link to='/book-a-service'>
                <button className="text-white cursor-pointer">Book a Service</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Burger Menu Button (Mobile) */}
      <div className="flex md:hidden">
        <button onClick={() => setMenu(!menu)}>
          {menu ? <GoX size={30} /> : <img src={BurgerMenu} alt="Burger Menu Icon" className="w-[30px]" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menu && (
        <div className="absolute top-16 right-0 bg-white shadow-lg p-4 w-64 md:hidden">
          <ul className="flex flex-col gap-4">
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      )}

      </div>
    </div>
  );
};

export default Navbar;