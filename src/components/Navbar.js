import React from "react";
import { Navbar, MobileNav, IconButton } from "@material-tailwind/react";

import image1 from "../assets/image/Logo-01.png";
import { Link } from "react-router-dom";

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
  const navList = (
    <ul className="flex flex-col text-gray-500 gap-4 lg:flex-row lg:items-center lg:gap-6">
      <li>
        <Link
          to="/know-us"
          className="text-base font-medium transition hover:text-blue-500"
        >
          KNOW US
        </Link>
      </li>
      <li>
        <Link
          to="/what-we-do"
          className="text-base font-medium transition hover:text-blue-500"
        >
          WHAT WE DO
        </Link>
      </li>
      <li>
        <Link
          to="/join-us"
          className="text-base font-medium transition hover:text-blue-500"
        >
          WHY JOIN US
        </Link>
      </li>
      <li>
        <Link
          to="/collections"
          className="text-base font-medium transition hover:text-blue-500"
        >
          COLLECTIONS
        </Link>
      </li>

      <li>
        <Link
          to="/reach-us"
          className="text-base font-medium transition hover:text-blue-500"
        >
          REACH US
        </Link>
      </li>
    </ul>
  );

  return (
    <Navbar className="bg-primary border-none sticky top-0 z-50 w-full max-w-[100vw] rounded-none">
      <div className="container  flex items-center  justify-between max-w-2xl mx-auto">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src={image1} alt="Logo" className="h-10" />
          </Link>
        </div>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container ml-3 my-1">{navList}</div>
      </MobileNav>
    </Navbar>
  );
}

export default NavbarDefault;
