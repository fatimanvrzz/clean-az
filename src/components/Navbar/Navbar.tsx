import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex items-center">
      <div className="flex border-1 items-center mt-[33px] w-[1300px] justify-between">
        {/* Logo, Links sections */}
        <div className="flex gap-[300px] p-2">
          <div >
            <Link to='/'>
              <img src={Logo} alt="Logo" className="" /></Link>
          </div>
          <div className="flex items-center">
            <ul className="flex gap-[41px]">
              <li>
                <Link className="flex gap-[3px] items-center" to='/services'>Services <IoIosArrowDown/></Link>
              </li>
              <li>
                <Link to='/aboutus'>About Us</Link>
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
            En <IoIosArrowDown/> 
          </div>
          <div className="border-1 ">
            <button className="text-white rounded">Book a Service</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;