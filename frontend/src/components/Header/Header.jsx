import { useRef, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

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
            ref={menuRef}
          >
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
                    onClick={closeMenu}
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* ======Nav Right===== */}
          <div className="flex items-center gap-4">
            <div>
              <Link to="/">
                <figure className="w-[40px] h-[40px] rounded-full">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="user"
                    className="w-full h-full object-cover rounded-full"
                  />
                </figure>
              </Link>
            </div>

            <Link to="/login">
              <button className="bg-primaryColor hover:opacity-80 text-whiteColor py-3 px-6 text-[16px] font-[600] h-[40px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>

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
