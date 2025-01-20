import { Typography } from "@material-tailwind/react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Typography variant="paragraph" className="text-sm">
          &copy; {new Date().getFullYear()} OY All Rights Reserved.
        </Typography>

        <Typography variant="paragraph" className="text-sm">
          Developed by <span className="font-semibold">KDW</span>
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
