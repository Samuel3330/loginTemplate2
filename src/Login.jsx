import React, { useState } from "react";
import {
  RiMailFill,
  RiDoorLockFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
const Login = () => {
  const [focus, onFocus] = useState(false);
  const [focus2, onFocus2] = useState(false);
  return (
    <section className="w-full">
      <div className="w-full min-h-[100vh] relative left-0 top-0">
        <div
          className={`w-full sm:w-[50vw] lg:w-[70vw] min-h-[100vh] bg-no-repeat bg-contain absolute transition-all duration-500 top-0 right-0 flex items-center justify-center`}
        >
          <img src="hero.png" alt="" className="w-[500px] sm:z-10" />
          <div className="w-24 h-24 rounded-full bg-[#F7F7F9] shadow-inset absolute top-10 right-20"></div>
          <div className="w-10 h-10 rounded-full bg-[#F7F7F9] shadow-inset absolute md:bottom-32 bottom-10 md:right-36 right-10"></div>
          <div className="w-36 h-36 rounded-full bg-[#F7F7F9] shadow-inset absolute top-10 left-10"></div>
          <div className=" w-48 h-48 rounded-full bg-[#F7F7F9] shadow-inset absolute bottom-0 left-20"></div>
        </div>
      </div>

      <div className="absolute flex flex-col box-content max-md:backdrop-blur-sm justify-around items-center w-full sm:w-[50vw] lg:w-[30vw] min-h-[100vh] md:bg-white top-0 left-0 shadow-2xl">
        <div className="flex gap-2 justify-start items-center w-full px-10">
          <img src="espacialComp.png" alt="" className="w-20  " />
          <h1 className="text-black font-semibold font-body text-xl">
            LogHouse
          </h1>
        </div>
        <div className="w-full flex flex-col justify-center items-start p-10">
          <h1 className="text-gray-900 text-2xl mb-2  font-body font-semibold">
            Sign in
          </h1>
          <form
            action="#"
            className="flex justify-center gap-5 w-full items-start flex-col"
          >
            <div className="w-full">
              <label htmlFor="" className="text-gray-900 font-body text-sm">
                User Name
              </label>
              <div
                className={`relative w-[90%] mt-2 rounded-md ${
                  focus ? "border-gray-700" : ""
                }`}
              >
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <span
                    className={`sm:text-md ${
                      focus ? "text-[#426FFC]" : "text-gray-400"
                    }`}
                  >
                    <RiMailFill />
                  </span>
                </div>
                <input
                  type="text"
                  onFocus={() => onFocus(!focus)}
                  onBlur={() => onFocus(!focus)}
                  name="price"
                  id="price"
                  className="shadow-inset block w-full rounded-md border-0 pl-14 sm:pl-12 text-black bg-white placeholder:text-gray-400 placeholder:text-sm sm:placeholder:text-sm placeholder:font-body p-2 sm:p-3 border-gray-300 focus:outline-none"
                  placeholder="Enter User Name"
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="" className="text-gray-900 text-sm">
                Password
              </label>
              <div
                className={`relative w-[90%] mt-2 rounded-md ${
                  focus2 ? "border-gray-700" : ""
                }`}
              >
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <span
                    className={`sm:text-md ${
                      focus2 ? "text-[#426FFC]" : "text-gray-400"
                    }`}
                  >
                    <RiDoorLockFill />
                  </span>
                </div>
                <input
                  type="password"
                  onFocus={() => onFocus2(!focus2)}
                  onBlur={() => onFocus2(!focus2)}
                  name="price"
                  id="price"
                  className="block w-full rounded-md border-0 pl-14 sm:pl-12 text-black bg-white placeholder:text-gray-400 placeholder:text-sm sm:placeholder:text-sm placeholder:font-body p-2 sm:p-3 shadow-inset focus:outline-none"
                  placeholder="Enter Password"
                />
              </div>
              <div className="w-full mt-5">
                <a
                  href="#"
                  className="underline text-[12px] font-body hover:text-gray-900 font-semibold text-gray-600"
                >
                  FORGOT PASSWORD?
                </a>
              </div>
            </div>
            <button className="text-white hover:shadow-signIn w-[90%] py-3 font-body rounded-md p-6 bg-[#6596d2]">
              SIGN IN
            </button>
          </form>
        </div>
        <div className="w-full px-10">
          <h2 className="text-gray-800 text-sm font-body">
            Dont have an account?{" "}
            <a href="#" className="font-semibold">
              {" "}
              Sign up
            </a>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Login;
