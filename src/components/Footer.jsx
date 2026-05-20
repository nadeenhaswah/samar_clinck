import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
function Footer() {
  return (
    <>
      <footer className=" pt-7 w-full bg-white shadow shadow-3xl shadow-accent text-center text-sm text-main-gray ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-4 container-section">
          {/* logo and text */}
          <div className="flex flex-col gap-7">
            <NavLink to="/">
              <img src={logo} alt="logo" className="h-16 w-35 md:h-20 md:w-50 mx-auto" />
            </NavLink>
            <p className="text-main-gray font-bold">
              " Because Your Smile Deserves Excellence Advanced dental care for a
              healthy, confident, and beautiful smile "
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center py-5 text-center w-full shadow shadow-3xl shadow-accent bg-primary  mt-7">
          <p className="text-xs md:text-sm text-white">
            © 2024 Samar Clinic. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
