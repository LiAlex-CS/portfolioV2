import React from "react";
import Layout from "../components/Layout";
import { PLarge, Title, H2, P } from "../components/Typography/Text";
import { motion as M } from "framer-motion";
import { fadeIn } from "../styles/animations";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { twMerge } from "tailwind-merge";
import strings from "../static_strings/about.strings";
import SEOHead from "../services/metadata/SEO";

const seperateParagraphs = (text) => {
  let paragraphs = [];
  let currentParagraph = "";
  let index = 0;
  while (index < text.length) {
    const currentChar = text[index];
    if (
      currentChar === "\\" &&
      index + 1 < text.length &&
      text[index + 1] === "n"
    ) {
      paragraphs.push(currentParagraph);
      currentParagraph = "";
      index += 2;
    } else {
      currentParagraph += currentChar;
      index += 1;
    }
  }
  paragraphs.push(currentParagraph);
  return paragraphs;
};

const AboutMeSection = ({ header, body, imageData, caption, className }) => {
  const isIntro = header === "Introduction";

  return (
    <div
      className={twMerge(
        "flex flex-col justify-center items-center",
        className
      )}
    >
      <div
        className={`rounded-3xl flex flex-row flex-wrap text-start items-center my-8 w-11/12 lg:w-3/4 2xl:w-1/2 p-8 ${
          isIntro ? "" : "bg-primary-400 dark:bg-primary-dark-200"
        }`}
      >
        {!isIntro ? <H2 className="mb-10">{header}</H2> : null}
        {seperateParagraphs(body).map((paragraph, index) => (
          <PLarge className="my-3" key={`${header}-${index}`}>
            {paragraph}
          </PLarge>
        ))}
      </div>
      {imageData ? (
        <div className="rounded-3xl flex flex-col my-10 bg-primary-400 dark:bg-primary-dark-200 max-w-2xl mx-7">
          <GatsbyImage
            image={getImage(imageData)}
            alt={imageData.description}
            className="rounded-t-3xl"
          />
          <P className="m-4 text-gray-400 dark:text-zinc-400">{caption}</P>
        </div>
      ) : null}
    </div>
  );
};

export default function About({ data }) {
  const aboutMeData = data.allContentfulAboutMeSection.nodes;
  const sortedAboutMeData = aboutMeData.sort(
    (sectionA, sectionB) => sectionA.order - sectionB.order
  );

  return (
    <Layout>
      <M.div
        className="flex flex-col w-full pt-16 text-center items-center"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
        exit={fadeIn.exit}
      >
        <Title className="my-16 lg:mt-28 xl:mt-36">{strings.TITLE}</Title>
        {sortedAboutMeData.map((section, index) => {
          return (
            <M.div
              initial={fadeIn.initial}
              animate={fadeIn.animate}
              transition={{ ...fadeIn.transition, delay: 0.3 * (index + 1) }}
              key={section.contentful_id}
            >
              <AboutMeSection
                header={section.header}
                body={section.body.body}
                imageData={section.image}
                caption={section.imageCaption}
              />
            </M.div>
          );
        })}
        {/* 
        <div className="rounded-3xl bg-primary-400 dark:bg-primary-dark-200 flex flex-row flex-wrap text-start items-center my-8 w-11/12 lg:w-3/4 2xl:w-1/2 p-8">
          <H2 className="mb-10">Personal Hobbies & Recreation</H2>
          <PLarge>
            Lorem ipsum dolor sit amet consectetur. Auctor ultricies at quis
            pellentesque euismod eget gravida. Vel nunc odio ut venenatis
            faucibus blandit sed enim lectus. Orci gravida ipsum sem diam
            facilisi varius. Augue nam orci nisl mauris. Pretium volutpat justo
            varius ornare porta. Sed sit id id quam. Id et vel amet tempor sit
            augue nisl aliquam neque.
          </PLarge>
        </div> */}
      </M.div>
    </Layout>
  );
}

export const Head = () => (
  <SEOHead
    title={strings.SEO_TITLE}
    description={strings.SEO_DESCRIPTION}
    pathname={strings.PATH}
  />
);

export const query = graphql`
  query AboutMeQuery {
    allContentfulAboutMeSection {
      nodes {
        contentful_id
        header
        body {
          body
        }
        image {
          gatsbyImageData(layout: FULL_WIDTH)
          description
        }
        imageCaption
        order
      }
    }
  }
`;
