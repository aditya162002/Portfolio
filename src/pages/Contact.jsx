import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";

import { Fox } from "../models";
import useAlert from "../hooks/useAlert";
import { Alert, Loader } from "../components";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setCurrentAnimation("hit");

    // Debug: Log the configuration
    console.log("EmailJS Config:", {
      serviceId: import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
    });

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Aditya Bhadauria",
          from_email: form.email,
          to_email: "adityabhadauria162002@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          console.error("FAILED...", error);
          setLoading(false);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: `Failed to send message: ${error.text || error.message}`,
            type: "danger",
          });
        }
      );
  };

  return (
    <section
      className="relative flex flex-col max-container"
      style={{ background: "black", minHeight: "100vh" }}
    >
      {alert.show && <Alert {...alert} />}

      <div className="flex-1 min-w-full flex flex-col px-4 sm:px-0">
        <h1 className="head-text text-white text-center sm:text-left">Get in Touch</h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-6 sm:gap-7 mt-8 sm:mt-14 max-w-md sm:max-w-none mx-auto sm:mx-0"
        >
          <label className="text-white font-semibold">
            Name
            <input
              type="text"
              name="name"
              className="input"
              placeholder="John"
              required
              value={form.name}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-white font-semibold">
            Email
            <input
              type="email"
              name="email"
              className="input"
              placeholder="John@gmail.com"
              required
              value={form.email}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>
          <label className="text-white font-semibold">
            Your Message
            <textarea
              name="message"
              rows="4"
              className="textarea"
              placeholder="Write your thoughts here..."
              value={form.message}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="text-white px-5 py-3 rounded-lg transition disabled:opacity-50 font-medium"
            style={{
              background: "linear-gradient(to right, #111111, #1a1a1a)",
            }}
          >
            {loading ? "Sending..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
