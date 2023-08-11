import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export const useSendEmail = (options) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => emailjs.init(process.env.EMAIL_PUBLIC_KEY), []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const SERVICE_ID = "portfolio_email_service";
    const TEMPLATE_ID = "portfolio_contact_email";

    try {
      setLoading(true);
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, options);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [loading, error, handleSubmit];
};
