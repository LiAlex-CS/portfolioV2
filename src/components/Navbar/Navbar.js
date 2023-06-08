import React, { useContext } from "react";
import { ThemeContext } from "../Context";
import { FaBars } from "react-icons/fa";
import { graphql, Link, useStaticQuery } from "gatsby";
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import { H4 } from "../Typography/Text";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const data = useStaticQuery(graphql`
    query LogoQuery {
      dark: file(relativePath: { eq: "logo_dark.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      light: file(relativePath: { eq: "logo_light.png" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  const logo = getImage(isDarkMode ? data.dark : data.light);
  return (
    <nav className="sticky bg-gray-50 border-gray-200 dark:bg-primary-dark-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <GatsbyImage image={logo} alt="logo icon" className="w-10" />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <FaBars className="w-6 h-6" />
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:border-0 items-center">
            <li>
              <Link to="/" aria-current="page">
                <H4 className="dark:hover:text-blue-500">Home</H4>
              </Link>
            </li>
            <li>
              <Link to="/about" aria-current="page">
                <H4 className="dark:hover:text-blue-500">About Me</H4>
              </Link>
            </li>
            <li>
              <Link to="/experience" aria-current="page">
                <H4 className="dark:hover:text-blue-500">Experience</H4>
              </Link>
            </li>
            <li>
              <Link to="/contact" aria-current="page">
                <H4 className="dark:hover:text-blue-500">Contact</H4>
              </Link>
            </li>
            <ThemeButton />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
