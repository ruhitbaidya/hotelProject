import logo from "../assets/logo.png";
import { FaRegUserCircle } from "react-icons/fa";
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="container mx-auto py-[11px] px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="font-bold text-[30px] text-green-600 hover:text-green-500 transition-colors">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </div>

          {/* Sign Buttons */}
          <div className="flex gap-3 bg-[#0466c8] text-[15px] text-white px-2.5 py-3 rounded-[5px]">
            <div className="flex justify-center items-center ">
              <FaRegUserCircle />
            </div>{" "}
            <button className="cursor-pointer hover:underline">Sign In</button>/
            <button className="cursor-pointer hover:underline">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
