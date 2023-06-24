import * as React from "react";
import Layout from "../components/Layout";
import PortfolioSVG from "../components/svgs/PortfolioSVG/PortfolioSVG";
import { StaticImage } from "gatsby-plugin-image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { graphql } from "gatsby";
import { PLarge } from "../components/Typography/Text";
import { motion as M } from "framer-motion";
import { fadeIn, spin } from "../styles/animations";

export default function Home({ data }) {
  const introText = data.contentfulIntroText.text.text;
  const resumeUrl = data.contentfulFile.file.file.url;

  return (
    <Layout>
      <M.div
        className="flex flex-col w-full pt-16 lg:pt-32 xl:pt-44"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
        exit={fadeIn.exit}
      >
        <div className="flex flex-wrap-reverse items-center justify-center mx-5">
          <div className="flex-col">
            <PortfolioSVG />
            <div className="mt-6 max-w-3xl">
              <PLarge>{introText}</PLarge>
            </div>
          </div>
          <M.div
            animate={spin.animate}
            transition={spin.transition}
            className="rounded-full border-r-2 m-12 border-secondary-500 dark:border-secondary-dark-500"
          >
            <M.div
              animate={spin.reverse.animate}
              transition={spin.reverse.transition}
              className="p-4"
            >
              <StaticImage
                src="../assets/images/profile_picture.webp"
                width={256}
                className="rounded-full"
                alt="Profile Picture"
              />
            </M.div>
          </M.div>
        </div>
        <div className="flex flex-row justify-center my-12 md:mt-6">
          <M.a
            href="https://www.linkedin.com/in/zishu-alex-li-54b35718b/"
            target="_blank"
            rel="noreferrer"
            initial={fadeIn.icons.initial}
            animate={fadeIn.icons.animate}
            transition={{ ...fadeIn.icons.transition, delay: 1 }}
            className="mx-7 p-3 rounded-full border-2 border-primary-200 dark:border-primary-dark-200 hover:border-secondary-200 dark:hover:border-secondary-dark-400"
          >
            <FaLinkedin className="text-typography dark:text-typography-dark text-3xl transform transition duration-200 hover:scale-110" />
          </M.a>
          <M.a
            href="https://github.com/LiAlex-CS"
            target="_blank"
            rel="noreferrer"
            initial={fadeIn.icons.initial}
            animate={fadeIn.icons.animate}
            transition={{ ...fadeIn.icons.transition, delay: 1.3 }}
            className="mx-7 p-3 rounded-full border-2 border-primary-200 dark:border-primary-dark-200 hover:border-secondary-200 dark:hover:border-secondary-dark-400"
          >
            <FaGithub className="text-typography dark:text-typography-dark text-3xl transform transition duration-200 hover:scale-110" />
          </M.a>
          <M.a
            href="https://www.instagram.com/li__alexx/"
            target="_blank"
            rel="noreferrer"
            initial={fadeIn.icons.initial}
            animate={fadeIn.icons.animate}
            transition={{ ...fadeIn.icons.transition, delay: 1.6 }}
            className="mx-7 p-3 rounded-full border-2 border-primary-200 dark:border-primary-dark-200 hover:border-secondary-200 dark:hover:border-secondary-dark-400"
          >
            <FaInstagram className="text-typography dark:text-typography-dark text-3xl transform transition duration-200 hover:scale-110" />
          </M.a>
          <M.a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            initial={fadeIn.icons.initial}
            animate={fadeIn.icons.animate}
            transition={{ ...fadeIn.icons.transition, delay: 1.9 }}
            className="mx-7 p-3 rounded-full border-2 border-primary-200 dark:border-primary-dark-200 hover:border-secondary-200 dark:hover:border-secondary-dark-400"
          >
            <HiOutlineDocumentText className="text-typography dark:text-typography-dark text-3xl transform transition duration-200 hover:scale-110" />
          </M.a>
        </div>
      </M.div>
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    contentfulIntroText {
      text {
        text
      }
    }
    contentfulFile(name: { eq: "Resume" }) {
      file {
        file {
          url
        }
      }
    }
  }
`;
