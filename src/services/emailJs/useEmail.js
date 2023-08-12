import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export const useSendEmail = (options) => {
  useEffect(() => emailjs.init(process.env.EMAIL_PUBLIC_KEY), []);
  const [sendingEmailLoading, setSendingEmailLoading] = useState(false);

  const sendEmail = async () => {
    const SERVICE_ID = "portfolio_email_service";
    const TEMPLATE_ID = "portfolio_contact_email";

    try {
      setSendingEmailLoading(true);
      return await emailjs.send(SERVICE_ID, TEMPLATE_ID, options);
    } catch (error) {
      throw error;
    } finally {
      setSendingEmailLoading(false);
    }
  };

  return { sendingEmailLoading, sendEmail };
};
