import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { Globe, Menu } from "lucide-react";
import { useState } from "react";
import BookAppointment from "./BookAppointment";

function Navbar() {
  const links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Results", path: "/results" },
    { id: 5, name: "Feedback", path: "/feedback" },
    { id: 6, name: "Contact", path: "/contact" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <header className="container-section w-full bg-white shadow shadow-3xl shadow-accent flex items-center justify-between py-2">
        {/* logo  */}
        <NavLink to="/">
          <img
            src={logo}
            alt="logo"
            className="h-16 w-35 md:h-20 md:w-50 mx-auto"
          />
        </NavLink>
        {/* Navigation Links - Desktop */}
        <nav className="hidden lg:flex xl:space-x-10 lg:space-x-5 space-x-3 xl:text-sm text-xs">
          {links.map((link) => (
            <NavLink
              key={link.id}
              to={link.path}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Navigation Links - mobile */}
        {isMenuOpen && (
          <>
            <div className="flex flex- gap-3">
              <nav className="lg:hidden fixed top-19 left-0 w-full bg-white shadow-md flex flex-col items-center py-4 space-y-3 z-10">
                {links.map((link) => (
                  <NavLink
                    key={link.id}
                    to={link.path}
                    className={({ isActive }) =>
                      isActive ? "nav-link active-link" : "nav-link"
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
                <div className="flex flex-nowrap items-center justify-between gap-3 md:gap-6 mt-3 ">
                  <Globe
                    size={27}
                    className="text-main-gray hover:text-primary cursor-pointer transition duration-300 "
                  />
                  <BookAppointment />
                </div>
              </nav>
              {/* Right side elements */}
            </div>
          </>
        )}

        {/* Right side elements */}
        <div className="hidden lg:flex flex-nowrap items-center justify-center gap-3 md:gap-6  ">
          <Globe
            size={27}
            className="text-main-gray hover:text-primary cursor-pointer transition duration-300 "
          />
          <BookAppointment />
        </div>

        {/* menu for mobile   */}
        <Menu
          size={27}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block lg:hidden text-main-gray hover:text-primary cursor-pointer transition duration-300 "
        />
      </header>
    </>
  );
}

export default Navbar;
