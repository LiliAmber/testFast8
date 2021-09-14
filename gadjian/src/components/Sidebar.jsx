import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div>
      {/* header start here */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className=" relative flex items-end justify-end h-14">
          <div className="absolute inset-y-2 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <span className="hidden md:block mr-4">Hello User</span>
            <img
              className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
              src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
              alt="avatar"
            />
          </div>
        </div>
      </div>
      {/*sidebar start here */}
      <div
        className="
        fixed
        flex flex-col
        top-14
        left-0
        w-14
        hover:w-64
        md:w-64
        dark:bg-gray-900
        h-full text-black
        transition-all
        duration-300
        border-none
        z-10
        sidebar
      "
      >
        <div
          className="
          overflow-y-auto overflow-x-hidden
          flex flex-col
          justify-between
          flex-grow
        "
        >
          <ul className="flex flex-col py-4 space-y-1">
            <li>
              <Link
                to="/"
                className="
                relative
                flex flex-row
                items-center
                h-11
                focus:outline-none
                hover:text-green-400
                border-l-4 border-transparent
                pr-6
              "
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Beranda
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/personnel"
                className="
                relative
                flex flex-row
                items-center
                h-11
                focus:outline-none
                hover:text-green-400
                border-l-4 border-transparent
                pr-6
              "
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Personel List
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="."
                className="
                relative
                flex flex-row
                items-center
                h-11
                focus:outline-none
                hover:text-green-400
                border-l-4 border-transparent
                pr-6
              "
              >
                <span className="inline-flex justify-center items-center ml-4">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    ></path>
                  </svg>
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  Daily Attendance
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
