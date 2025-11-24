import { BsArrowUpRightSquareFill } from "react-icons/bs";
import image from "../assets/subscribe.jpg";

const Subscribe = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="container mx-auto py-20 px-4 backdrop-brightness-75">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-white text-3xl md:text-4xl font-bold">
            Subscribe & Get Special Discount with GeoTrip.com
          </h2>

          <p className="text-white text-lg opacity-90">
            Join our newsletter to receive exclusive offers & travel deals.
          </p>

          {/* Input + Button Same Box */}
          <div className="flex items-center justify-center w-full">
            <div className="flex w-full  bg-white p-[10px] rounded-xl overflow-hidden shadow-md w-full max-w-lg">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 w-full outline-none text-gray-700"
              />

              <button className="bg-[#0466c8] rounded-[5px] cursor-pointer hover:bg-[#0466c8] text-white px-6 flex items-center gap-2 font-semibold transition">
                Subscribe <BsArrowUpRightSquareFill size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
