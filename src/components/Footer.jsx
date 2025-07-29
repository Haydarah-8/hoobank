import { useState } from "react";
import { Link } from 'react-router-dom';
import styles from "../style";
import { logo } from "../assets";
import { navLinks } from "../constants";

const Footer = () => {
  const [active, setActive] = useState("Home");

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-center items-center">
          <Link to="/">
            <img
              src={logo}
              alt="hoobank"
              className="w-[266px] h-[72.14px] object-contain cursor-pointer mb-8"
            />
          </Link>
          
          {/* Navigation Links */}
          <ul className="list-none flex flex-wrap justify-center items-center gap-8 mb-8">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } hover:text-secondary transition-colors duration-200`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          
          <p className={`${styles.paragraph} mt-4 max-w-[312px] text-center`}>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
      </div>

      <div className="w-full flex justify-center items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2022 HooBank. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
