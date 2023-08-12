import React from "react";
import Layout from "../components/Layout";
import { H2, H3, Title, P, PLarge } from "../components/Typography/Text";
import { motion as M } from "framer-motion";
import { fadeIn } from "../styles/animations";
import { SiGatsby, SiReact, SiTailwindcss, SiContentful } from "react-icons/si";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";
import { twMerge } from "tailwind-merge";
import { translate } from "../styles/animations";

const ScrollingToolSet = ({ tools, className }) => {
  const ToolsList = () => (
    <M.ul
      className={twMerge("flex flex-row items-center", className)}
      initial={translate.initial}
      animate={translate.animate}
      transition={translate.transition}
    >
      {tools.map((tool, index) => (
        <li className="flex flex-col mx-10 whitespace-nowrap" key={index}>
          <H2>{tool}</H2>
        </li>
      ))}
    </M.ul>
  );

  return (
    <div className="w-full my-3 overflow-hidden flex flex-row">
      <ToolsList />
      <ToolsList />
    </div>
  );
};

const ExperienceCard = ({
  id,
  imgSrc,
  title,
  position,
  dateRange,
  detailPoints,
}) => {
  return (
    <div className="rounded-3xl bg-primary-400 dark:bg-primary-dark-200 flex flex-row flex-wrap text-start items-center my-8 w-11/12 lg:w-3/4 2xl:w-1/2">
      <div className="mx-3">
        <GatsbyImage image={getImage(imgSrc)} alt={imgSrc.description} />
      </div>
      <div className="flex flex-col mx-5 flex-1">
        <div className="flex flex-row justify-between items-end my-3">
          <H2>{title}</H2>
          <P>{dateRange}</P>
        </div>
        <div className="my-3">
          <H3>{position}</H3>
        </div>
        <ul className="list-disc mb-3 marker:text-typography dark:marker:text-typography-dark">
          {detailPoints.map((detailPoint, index) => (
            <li key={`${id}-${index}`}>
              <PLarge>{detailPoint}</PLarge>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function Experience({ data }) {
  const experiences = data.allContentfulExperience.nodes;
  const sortedExperiences = experiences.sort(
    (experienceA, experienceB) => experienceB.order - experienceA.order
  );

  const skills = data.allContentfulSkill.nodes.map((node) => node.skill);

  return (
    <Layout>
      <M.div
        className="flex flex-col w-full text-center items-center"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
        exit={fadeIn.exit}
      >
        <Title className="my-16 lg:my-28 xl:my-36">Alex Li: Soft Dev</Title>
        <H3 className="mb-16">Tools that I use:</H3>
        <ScrollingToolSet className="mb-16" tools={skills} />
        <H3 className="max-w-lg">
          As an example, the website you are on is constructed with the
          following tools:
        </H3>
        <div className="flex flex-row justify-center flex-wrap">
          <div className="flex flex-row my-14">
            <SiGatsby className=" text-6xl mx-12 text-typography dark:text-typography-dark" />
            <SiReact className=" text-6xl mx-12 text-typography dark:text-typography-dark" />
          </div>
          <div className="flex flex-row my-14">
            <SiTailwindcss className=" text-6xl mx-12 text-typography dark:text-typography-dark" />
            <SiContentful className=" text-6xl mx-12 text-typography dark:text-typography-dark" />
          </div>
        </div>
        <H3 className="max-w-lg my-4">Some of my work experiences:</H3>
        {sortedExperiences.map((experience) => (
          <ExperienceCard
            id={experience.id}
            title={experience.companyName}
            dateRange={experience.dateRange}
            position={experience.positionTitle}
            imgSrc={experience.picture}
            detailPoints={experience.descriptionPoints}
            key={experience.id}
          />
        ))}
      </M.div>
    </Layout>
  );
}

export const query = graphql`
  query ExpereinceQuery {
    allContentfulExperience {
      nodes {
        id
        dateRange
        descriptionPoints
        positionTitle
        picture {
          gatsbyImageData(width: 200)
          description
        }
        companyName
        order
      }
    }
    allContentfulSkill {
      nodes {
        skill
      }
    }
  }
`;
