import React from "react";
import { Link } from "react-router-dom";

const Button = ({ styles }) => (
  <Link 
    to="/join-waitlist"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} inline-block text-center no-underline hover:scale-105 transition-transform duration-300`}
  >
    Join Waitlist
  </Link>
);

export default Button;
