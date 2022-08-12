import React, { useState } from "react";
import {
  ChevronDownIcon,
  HomeIcon,
  SearchIcon,
  LoginIcon,
  MenuIcon
} from "@heroicons/react/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faBars, faMicrochip } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [dropdownOpen, setdropdownOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-md">
      <a className="flex items-center ml-3" href="/">
        <FontAwesomeIcon
          icon={faMicrochip}
          className=" fa-2x text-purple-900"
        />
      </a>
      <div className="mx-7 flex items-center xl:min-w-[300px]">
        <HomeIcon className="h-5 w-5" />
        <p className="ml-2 hidden flex-1 lg:inline">Home</p>
        <ChevronDownIcon className="h-5 w-5" />
      </div>

      <form className="flex flex-1 items-center space-x-2 rounded-sm border border-gray-400 bg-gray-100 px-3 py-1">
        <SearchIcon className="h-6 w-6 text-gray-400 mr-3" />
        <input
          className="flex-1 bg-transparent outline-none"
          type="text"
          placeholder="Search"
        ></input>
        <button type="submit" hidden></button>
      </form>

      <div className="hidden mx-5 items-center space-x-2 lg:inline-flex ">
        <a href="https://www.linkedin.com/in/jimwhiteford/" target="_blank">
          <FontAwesomeIcon icon={faLinkedinIn} className="fa-2x" />
        </a>
        <hr className="h-10 border border-gray-100"></hr>
        <a href="https://github.com/jimwhiteford" target="_blank">
          <FontAwesomeIcon icon={faGithub} className="fa-2x" />
        </a>
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <FontAwesomeIcon
          icon={faBars}
          onClick={() => setdropdownOpen(!dropdownOpen)}
          className="hover:cursor-pointer"
        />
        <div
          className={`${
            dropdownOpen
              ? `top-full opacity-100 visible`
              : "top-[110%] invisible opacity-0"
          } absolute top-0 right-0 mt-1 mr-1 rounded border-[.5px] border-light bg-white py-5 shadow-lg transition-all`}
        >
          <a
            href="https://www.linkedin.com/in/jimwhiteford/"
            target="_blank"
            className="block py-2 px-5 text-base hover:bg-slate-500 hover:text-white"
            onClick={() => setdropdownOpen(!dropdownOpen)}
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="fa-1x mr-4" />
            LinkedIn
          </a>
          <a
            href="https://github.com/jimwhiteford"
            target="_blank"
            className="block py-2 px-5 text-base hover:bg-slate-500 hover:text-white"
            onClick={() => setdropdownOpen(!dropdownOpen)}
          >
            <FontAwesomeIcon icon={faGithub} className="fa-1x mr-4" />
            GitHub
          </a>
          <a
            href="/"
            className="block py-2 px-5 text-base font-semibold hover:bg-slate-500 hover:text-white"
            onClick={() => setdropdownOpen(!dropdownOpen)}
          >
            Sign In
          </a>
        </div>
      </div>

      <div className="hidden cursor-pointer items-center space-x-2 border border-gray-100 p-2 lg:flex">
        <div className="relative h-5 w-5 flex-shrink-0">
          <LoginIcon className="text-gray-400" />
        </div>
        <p className="text-gray-400">Sign In</p>
      </div>
    </div>
  );
}

export default Header;
