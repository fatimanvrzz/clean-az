import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex items-center cursor-pointer">
      <div className="flex items-center mt-[33px] w-[1300px] justify-between">
        {/* Logo, Links sections */}
        <div className="flex gap-[300px]">
          <div >
            <Link to='/'>
              <img src={Logo} alt="Logo" className="" /></Link>
          </div>
          <div className="flex items-center">
            <ul className="flex gap-[41px]">
              <li>
                <Link className="flex gap-[3px] items-center" to='/services'>Services <IoIosArrowDown /></Link>
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
        </div>
        {/* Translate and Book a Service section*/}
        <div className="flex items-center gap-[29px]">
          <div className="p-2 flex items-center">
            En <IoIosArrowDown />
          </div>
          <div className="bg-[#0F42FF] rounded-2xl px-10 py-4 ">
            <Link to='/book-a-service'>
              <button className="text-white cursor-pointer">Book a Service</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;