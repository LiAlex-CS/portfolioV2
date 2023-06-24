import React from "react";
import Layout from "../components/Layout";
import { H1 } from "../components/Typography/Text";
import { motion as M } from "framer-motion";
import { fadeIn } from "../styles/animations";

export default function Contact() {
  return (
    <Layout>
      <M.div
        className="flex flex-col w-full pt-16"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
        exit={fadeIn.exit}
      >
        <H1>Contact</H1>
      </M.div>
    </Layout>
  );
}
