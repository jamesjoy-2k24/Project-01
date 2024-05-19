import { useRef, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

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
    path: "/players",
    display: "Find Players",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickeyHeader = () => {
    window.addEventListener('scroll', () => {
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
      window.removeEventListener("scroll", handleStickeyHeader);
    }
  }
  useEffect(() => {
    handleStickeyHeader();

    return () => {
      window.removeEventListener("scroll", handleStickeyHeader);
    };
  });

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <header className="header flex items-center bg-white " ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">


          {/* ======Nav Left===== */}
          <div className="logo">
            <h1 className="text-primaryColor text-[28px] font-[700]">
              <Link to="/home">Pro-Pulse</Link>
            </h1>
          </div>


          {/* ======Nav Center===== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[17px] leading-7 font-[700] border-b-2 border-primaryColor"
                        : "text-black text-[17px] leading-7 font-[700]"
                    }
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
              <button className="bg-redColor text-whiteColor py-3 px-6 text-[16px] font-[600] h-[40px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
