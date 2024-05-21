import { useRef, useEffect, useState, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { authContext } from "../../context/authContext.jsx";
import useFetchData from "../../hooks/useFetchData.jsx";
import { BASE_URL } from "../../config";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
  {
    path: "/players",
    display: "Find Players",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, role, token } = useContext(authContext);

  const { data} = useFetchData(
    `${BASE_URL}/users/profile/me`,
  );
  

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky__header");
      } else {
        headerRef.current.classList.remove("sticky__header");
      }
    });
    return () => {
      window.removeEventListener("scroll", handleStickyHeader);
    };
  };

  useEffect(() => {
    handleStickyHeader();

    return () => {
      window.removeEventListener("scroll", handleStickyHeader);
    };
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    if (menuOpen) {
      menuRef.current.classList.remove("show__menu");
    } else {
      menuRef.current.classList.add("show__menu");
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header flex items-center bg-white" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ======Nav Left===== */}
          <div className="logo">
            <h1 className="text-primaryColor text-[28px] font-[700]">
              <Link to="/home">Pro-Pulse</Link>
            </h1>
          </div>

          {/* ======Nav Center===== */}
          <div
            className={`navigation ${menuOpen ? "show__menu" : ""} md:block`}
            ref={menuRef}>
            <ul className="menu flex flex-col md:flex-row items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[17px] leading-7 font-[700] border-b-2 border-primaryColor"
                        : "text-black text-[17px] leading-7 font-[800] hover:text-primaryColor transition-all duration-300"
                    }
                    onClick={closeMenu}>
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ======Nav Right===== */}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div className="flex gap-4 items-center">
                <Link
                  to={`${
                    role === "player"
                      ? "/players/profile/me"
                      : "/users/profile/me"
                  }`}>
                  <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                    <img
                      src={data?.photo}
                      className="w-full h-full object-cover object-top rounded-full"
                    />
                  </figure>

                </Link>
                  <h1 className="font-[600] text-[18px]">{user?.name}</h1>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor hover:opacity-80 text-whiteColor py-3 px-6 text-[16px] font-[600] h-[40px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              {menuOpen ? (
                <AiOutlineClose className="text-3xl z-10 cursor-pointer" />
              ) : (
                <BiMenu className="text-3xl z-10" />
              )}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
