import React from "react";
import Layout from "../components/Layout";
import { Title, H3 } from "../components/Typography/Text";
import { motion as M } from "framer-motion";
import { fadeIn } from "../styles/animations";
import Button from "../components/Button/Button";
import { navigate } from "gatsby";

export default function Missing() {
  return (
    <Layout>
      <M.div
        className="flex flex-col w-full pt-16 text-center items-center"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
        exit={fadeIn.exit}
      >
        <Title className="my-16 lg:mt-28 xl:mt-36">
          Something's Missing...
        </Title>
        <div className="my-8">
          <H3 className="my-2">404: The page you requested does not exist.</H3>
          <H3 className="my-2">Navigate to the home page below.</H3>
        </div>
        <Button
          label="Return to Home"
          onClick={() => {
            navigate("/");
          }}
        />
      </M.div>
    </Layout>
  );
}
