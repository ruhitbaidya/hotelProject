import { useState } from "react";
import logImg from "../assets/login.svg";
import logos from "../assets/logo.png";
const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="py-5">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center m-auto">
          <div className="w-full max-w-6xl">
            <div className="bg-white card shadow-sm rounded-3 overflow-hidden border border-gray-200">
              <div className="flex flex-col lg:flex-row">
                {/* Vector Image */}
                <div className="lg:w-1/2 flex items-center order-2 lg:order-1">
                  <div className="p-3 lg:p-5 w-full">
                    <img
                      src={logImg}
                      className="w-full h-auto"
                      alt="Login illustration"
                    />
                  </div>
                  {/* Divider */}
                  <div className="hidden lg:block w-px bg-gray-300 opacity-100 self-stretch"></div>
                </div>

                {/* Information */}
                <div className="lg:w-1/2 order-1 lg:order-2">
                  <div className="p-3 sm:p-4 md:p-5">
                    {/* Logo */}
                    <a className="inline-block">
                      <img
                        className="w-12 h-auto mb-4"
                        src={logos}
                        alt="logo"
                      />
                    </a>

                    {/* Title */}
                    <h1 className="mb-2 text-2xl font-bold text-gray-900">
                      Welcome Back Adam!
                    </h1>
                    <p className="mb-0 text-gray-600">
                      Are you new here?
                      <a
                        href="register.html"
                        className="font-medium text-blue-600 hover:text-blue-700 ml-1"
                      >
                        Create an account
                      </a>
                    </p>

                    {/* Form START */}
                    <form className="mt-4 text-left">
                      <div className="space-y-4 py-4">
                        {/* Email/Username Field */}
                        <div className="relative">
                          <input
                            type="email"
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                            User Name
                          </label>
                        </div>

                        {/* Password Field */}
                        <div className="relative">
                          <input
                            type={showPassword ? "text" : "password"}
                            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" "
                            required
                          />
                          <label className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                            Password
                          </label>
                          <button
                            type="button"
                            onClick={togglePasswordVisibility}
                            className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          >
                            <span
                              className={`fa-regular ${
                                showPassword ? "fa-eye-slash" : "fa-eye"
                              }`}
                            ></span>
                          </button>
                        </div>

                        {/* Login Button */}
                        <div className="form-group">
                          <button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
                          >
                            Log In
                          </button>
                        </div>

                        {/* Remember me and Forgot password */}
                        <div className="flex flex-col sm:flex-row items-center justify-between mb-3 space-y-3 sm:space-y-0">
                          <div className="flex items-center">
                            {/* <input
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                              type="checkbox"
                              id="savepassword"
                            />
                            <label
                              htmlFor="savepassword"
                              className="ml-2 text-sm text-gray-600"
                            >
                              Save Password
                            </label> */}
                          </div>
                          <div>
                            <a
                              href="#"
                              className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                            >
                              Forget Password?
                            </a>
                          </div>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="px-3">
                        <div className="relative">
                          <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                          </div>
                          <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-white text-gray-500">
                              Sign In with Socials
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Social Login Buttons */}
                      <div className="py-4 px-0 md:px-2">
                        <div className="flex flex-col gap-3">
                          <a
                            href="#"
                            className="flex items-center justify-center py-2 px-4 border border-dashed border-gray-300 rounded-full hover:bg-gray-50 transition duration-200"
                          >
                            <i className="bi bi-facebook text-blue-600 text-lg mr-2"></i>
                            Login with Facebook
                          </a>
                          <a
                            href="#"
                            className="flex items-center justify-center py-2 px-4 border border-dashed border-gray-300 rounded-full hover:bg-gray-50 transition duration-200"
                          >
                            <i className="bi bi-linkedin text-blue-700 text-lg mr-2"></i>
                            Login with LinkedIn
                          </a>
                        </div>
                      </div>
                    </form>
                    {/* Form END */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
