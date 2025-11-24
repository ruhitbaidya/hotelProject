import { useState } from "react";
import { FaSearchLocation } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Header = () => {
  const [linka, setLinka] = useState("hotel");
  return (
    <div className="h-[90vh] mt-[70px]">
      <div className="container mx-auto px-5 h-full">
        <div className="flex justify-center items-center h-full">
          <div>
            <div className="text-center">
              <h1 className="text-[48px] font-bold">
                Explore The World Around You
              </h1>
              <p className="text-[21px] mt-[10px]">
                Take a little break from the work strss of everyday. Discover
                plan trip and explore beautiful <br /> destinations.
              </p>
            </div>
            <div className="py-[15px]">
              <div className="flex justify-center items-center gap-[30px]">
                <div
                  className={`${
                    linka === "hotel" ? "border-b-2 border-[#0466c8]" : ""
                  } pb-[10px]`}
                >
                  <Link to="" onClick={() => setLinka("hotel")}>
                    <div className="flex justify-center items-center gap-[10px]">
                      <img
                        className="w-5 h-5"
                        src="https://cdn-icons-png.flaticon.com/512/3168/3168622.png"
                        alt=""
                      />{" "}
                      <p>Hotel</p>
                    </div>
                  </Link>
                </div>
                <div
                  className={`${
                    linka === "tour" ? "border-b-2 border-[#0466c8]" : ""
                  } pb-[10px]`}
                >
                  <Link to="" onClick={() => setLinka("tour")}>
                    <div className="flex justify-center items-center gap-[10px]">
                      <img
                        className="w-5 h-5"
                        src="https://cdn-icons-png.flaticon.com/512/17729/17729346.png"
                        alt=""
                      />{" "}
                      <p>Tour</p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="bg-gray-200 mt-[30px] p-[15px] rounded-[5px]">
                <div className="flex justify-center items-center">
                  <label htmlFor="search" className="relative w-full">
                    <div className="absolute left-1 top-[8px] text-[#0466c8]">
                      <IoLocationOutline size={25} />
                    </div>
                    <input
                      className="border pl-[35px] border-[#0466c8] rounded-[5px] py-[8px] w-[97%] focus:outline-none"
                      id="search"
                      type="text"
                      placeholder="Write Your Choice Place"
                    />
                  </label>

                  <button className="bg-[#0466c8] cursor-pointer rounded-[5px] px-[25px] py-[8px] text-white text-[19px] flex justify-center items-center gap-[15px]">
                    <FaSearchLocation /> Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
