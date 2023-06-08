import * as React from "react";
import Layout from "../components/Layout";
import PortfolioSVG from "../components/svgs/PortfolioSVG/PortfolioSVG";
import { StaticImage } from "gatsby-plugin-image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { graphql } from "gatsby";
import { PLarge } from "../components/Typography/Text";

export default function Home({ data }) {
  const introText = data.contentfulIntroText.text.text;

  return (
    <Layout>
      <div className="flex flex-col w-full pt-16 md:pt-32 lg:pt-48">
        <div className="flex flex-wrap-reverse items-center justify-center mx-5">
          <div className="flex-col">
            <PortfolioSVG />
            <div className="mt-6 max-w-3xl">
              <PLarge>{introText}</PLarge>
            </div>
          </div>
          <StaticImage
            src="../assets/images/profile_picture.webp"
            width={256}
            className="rounded-full m-14"
            alt="Profile Picture"
          />
        </div>
        <div className="flex flex-row justify-center my-12 md:mt-6">
          <a
            href="https://www.linkedin.com/in/zishu-alex-li-54b35718b/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="dark:text-white text-3xl mx-7" />
          </a>
          <a
            href="https://github.com/LiAlex-CS"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="dark:text-white text-3xl mx-7" />
          </a>
          <a
            href="https://www.instagram.com/li__alexx/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="dark:text-white text-3xl mx-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/zishu-alex-li-54b35718b/"
            target="_blank"
            rel="noreferrer"
          >
            <HiOutlineDocumentText className="dark:text-white text-3xl mx-7" />
          </a>
        </div>
      </div>
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
  }
`;
