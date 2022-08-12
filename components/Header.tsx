import React from "react";
import Image from "next/image";
import {
  ChevronDownIcon,
  HomeIcon,
  SearchIcon,
  LoginIcon
} from "@heroicons/react/solid";
import { ChatIcon, MenuIcon } from "@heroicons/react/outline";
import { SocialIcon } from "react-social-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <div className="sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm">
      <div className="relative h-10 w-20 flex-shrink-0">
        <Image objectFit="contain" src="/favicon.ico" layout="fill" />
      </div>
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

      <div className="hidden mx-5 items-center space-x-2 text-gray-500 lg:inline-flex ">
        <FontAwesomeIcon icon={faLinkedinIn} />
        <hr className="h-10 border border-gray-100"></hr>
        <FontAwesomeIcon icon={faGithub} />
      </div>
      <div className="ml-5 flex items-center lg:hidden">
        <MenuIcon className="icon" />
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
