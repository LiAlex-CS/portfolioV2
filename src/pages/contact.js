import React, { useState } from "react";
import Layout from "../components/Layout";
import { H3, P, Title } from "../components/Typography/Text";
import { motion as M } from "framer-motion";
import { fadeIn } from "../styles/animations";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { graphql } from "gatsby";
import Button from "../components/Button/Button";
import { useSendEmail } from "../services/emailJs/useEmail";
import {
  handleValidation,
  formContainsErrors,
  resetErrorValidation,
} from "../services/form_validation/validation";

const FormInput = ({
  label,
  id,
  type,
  placeholder,
  value,
  setValue,
  isTextArea,
}) => {
  return (
    <div className="my-6 text-start">
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor={id}
      >
        <H3>{label}</H3>
      </label>
      {isTextArea ? (
        <textarea
          type="text"
          rows={6}
          className="block p-2.5 w-full text-sm text-typography bg-gray-50 rounded-lg border border-gray-300 focus:ring-secondary-500 focus:border-secondary-500 dark:bg-primary-dark-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-typography-dark dark:focus:ring-secondary-dark-500 dark:focus:border-secondary-dark-500 focus:outline-none font-[Urbanist]"
          onChange={(event) => {
            setValue(event.currentTarget.value);
          }}
          value={value}
          placeholder={placeholder}
          id={id}
        />
      ) : (
        <input
          type={type ?? "text"}
          className="bg-gray-50 border border-gray-300 text-typography text-sm rounded-lg focus:ring-secondary-500 focus:border-secondary-500 block w-full p-2.5 dark:bg-primary-dark-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-typography-dark dark:focus:ring-secondary-dark-500 dark:focus:border-secondary-dark-500 focus:outline-none font-[Urbanist]"
          onChange={(event) => {
            setValue(event.currentTarget.value);
          }}
          value={value}
          placeholder={placeholder}
          id={id}
        />
      )}
    </div>
  );
};

const ValidationError = ({ errorMessage }) => {
  if (errorMessage) {
    return (
      <div>
        <P className="text-red-600">{errorMessage}</P>
      </div>
    );
  }
};

export default function Contact({ data }) {
  const resumeUrl = data.contentfulFile.file.file.url;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [formFieldErrors, setFormFieldErrors] = useState({
    name: null,
    email: null,
    phoneNumber: null,
    subject: null,
    message: null,
  });

  const [sendingEmailLoading, sendingEmailError, sendEmail] = useSendEmail({
    name,
    email,
    phoneNumber,
    subject,
    message,
  });

  const filterOnlyAlphanumeric = (phoneNumber) => {
    return phoneNumber.replace(/[^a-zA-Z0-9]/g, "");
  };

  const formatPhoneNumber = (phoneNumber) => {
    const hasLetters = /[A-Za-z]/.test(phoneNumber);
    const alphanumericPhoneNumber = filterOnlyAlphanumeric(phoneNumber);

    const phoneNumberLength = alphanumericPhoneNumber.length;

    if (hasLetters || phoneNumberLength <= 3 || phoneNumberLength > 15) {
      return alphanumericPhoneNumber.toUpperCase();
    } else if (phoneNumberLength <= 7) {
      const phoneNumberWithDash = `${alphanumericPhoneNumber.substring(
        0,
        3
      )}-${alphanumericPhoneNumber.substring(3, phoneNumberLength)}`;
      return phoneNumberWithDash;
    } else if (phoneNumberLength <= 10) {
      const fullFormatedPhoneNumber = `(${alphanumericPhoneNumber.substring(
        0,
        3
      )}) ${alphanumericPhoneNumber.substring(
        3,
        6
      )}-${alphanumericPhoneNumber.substring(6, phoneNumberLength)}`;
      return fullFormatedPhoneNumber;
    } else if (phoneNumberLength <= 13) {
      const countryCodeEndIndex = phoneNumberLength - 10;
      const fullPhoneNumber = `+${alphanumericPhoneNumber.substring(
        0,
        countryCodeEndIndex
      )} (${alphanumericPhoneNumber.substring(
        countryCodeEndIndex,
        countryCodeEndIndex + 3
      )}) ${alphanumericPhoneNumber.substring(
        countryCodeEndIndex + 3,
        countryCodeEndIndex + 6
      )}-${alphanumericPhoneNumber.substring(
        countryCodeEndIndex + 6,
        phoneNumberLength
      )}`;
      return fullPhoneNumber;
    } else {
      const countryCodeEndIndex = phoneNumberLength - 10;

      const unformattedCountryCode = alphanumericPhoneNumber.substring(
        0,
        countryCodeEndIndex
      );
      const countryCodePrefixEndIndex = unformattedCountryCode.length - 3;
      const formattedCountryCode = `+${unformattedCountryCode.substring(
        0,
        countryCodePrefixEndIndex
      )}-${unformattedCountryCode.substring(
        countryCodePrefixEndIndex,
        unformattedCountryCode.length
      )}`;

      const unformattedPhoneNumber = alphanumericPhoneNumber.substring(
        countryCodeEndIndex,
        phoneNumberLength
      );
      const formattedPhoneNumber = `(${unformattedPhoneNumber.substring(
        0,
        3
      )}) ${unformattedPhoneNumber.substring(
        3,
        6
      )}-${unformattedPhoneNumber.substring(6, unformattedPhoneNumber.length)}`;

      const fullPhoneNumber = `${formattedCountryCode} ${formattedPhoneNumber}`;
      return fullPhoneNumber;
    }
  };

  const handleSubmitForm = () => {
    handleValidation(
      name,
      email,
      phoneNumber,
      subject,
      message,
      setFormFieldErrors
    );
    if (!formContainsErrors(name, email, phoneNumber, subject, message)) {
      alert("Sent email!");
      // sendEmail();
    }
  };

  return (
    <Layout>
      <M.div
        className="flex flex-col w-full text-center items-center"
        initial={fadeIn.initial}
        animate={fadeIn.animate}
        transition={fadeIn.transition}
        exit={fadeIn.exit}
      >
        <div className="my-20">
          <Title>Contact Me</Title>
        </div>
        <div className="flex flex-row flex-wrap justify-center">
          <div className="flex flex-row my-12 md:mt-6">
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
          </div>
          <div className="flex flex-row my-12 md:mt-6">
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
        </div>
        <div className="w-11/12 lg:w-3/4 2xl:w-1/2">
          <form>
            <FormInput
              label={"Name:"}
              placeholder="Your Name"
              value={name}
              setValue={(name) => {
                resetErrorValidation(
                  "name",
                  formFieldErrors,
                  setFormFieldErrors
                );
                setName(name);
              }}
              id="input-name"
            />
            <ValidationError errorMessage={formFieldErrors.name} />
            <FormInput
              label={"Email:"}
              type="email"
              placeholder="email@domain.com"
              value={email}
              setValue={(email) => {
                resetErrorValidation(
                  "email",
                  formFieldErrors,
                  setFormFieldErrors
                );
                setEmail(email);
              }}
              id="input-email"
            />
            <ValidationError errorMessage={formFieldErrors.email} />
            <FormInput
              label={"Phone Number:"}
              type="tel"
              placeholder="Your Phone Number"
              value={formatPhoneNumber(phoneNumber)}
              setValue={(phoneNumber) => {
                resetErrorValidation(
                  "phoneNumber",
                  formFieldErrors,
                  setFormFieldErrors
                );
                setPhoneNumber(filterOnlyAlphanumeric(phoneNumber));
              }}
              id="input-phone-number"
            />
            <ValidationError errorMessage={formFieldErrors.phoneNumber} />
            <FormInput
              label={"Subject:"}
              placeholder="Your Subject"
              value={subject}
              setValue={(subject) => {
                resetErrorValidation(
                  "subject",
                  formFieldErrors,
                  setFormFieldErrors
                );
                setSubject(subject);
              }}
              id="input-subject"
            />
            <ValidationError errorMessage={formFieldErrors.subject} />
            <FormInput
              label={"Message:"}
              placeholder="Your Message"
              value={message}
              setValue={(message) => {
                resetErrorValidation(
                  "message",
                  formFieldErrors,
                  setFormFieldErrors
                );
                setMessage(message);
              }}
              isTextArea
              id="input-message"
            />
            <ValidationError errorMessage={formFieldErrors.message} />
          </form>
        </div>
        <Button label="Submit" type="submit" onClick={handleSubmitForm} />
      </M.div>
    </Layout>
  );
}

export const query = graphql`
  query ResumeQuery {
    contentfulFile(name: { eq: "Resume" }) {
      file {
        file {
          url
        }
      }
    }
  }
`;
