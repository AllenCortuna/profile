import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { successToast,errorToast,warnToast } from "../../utility/toast";
import { ToastContainer } from "react-toastify";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  
  const zoomAnimate = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 1, scale: 0,  },
  };
  const control = useAnimation();
  const [ref, inView] = useInView();
  
  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  
  const form = useRef();
  const [data, setData] = useState({
    name: " ",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (!data.name || !data.email || !data.message) {
      warnToast("Please complete all input");
    } else {
      setLoading(true);
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY,
        )
        .then(
          (result) => {
            console.log(result.text);
            successToast("Email Sent!");
            setData({ name: "", email: "", message: "" });
            setLoading(false);
          },
          (error) => {
            console.log(error.text);
            errorToast(error.text)
          },
        );
    }
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const label = "text-white text-lg font-[600] mt-5 mb-2 space";
  const input =
    "rounded-lg p-2 text-sm bg-zinc-700 outline-none border-2 border-zinc-700 focus:border-lime-300 text-zinc-200 font-[500] text-sm quick resize-none";
  return (
    <motion.div
      ref={ref}
      variants={zoomAnimate}
      initial="hidden"
      animate={control}
      className="mt-36 mb-20 flex justify-center w-full px-4"
    >
      <ToastContainer/>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="p-4 flex flex-col rounded-2xl w-full max-w-[26rem] border border-zinc-500 bg-zinc-800 bg-opacity-30 "
      >
        <span className="font-[800] text-lime-300 mb-5 w-full flex flex-col">
          <p className="text-xl sm:text-3xl">
          Contact
          </p>
          <p className="text-zinc-300 font-[300] text-sm sm:text-md">
            Send your contact info and inquires
          </p>
          <span className="h-[0.2rem] w-full mt-[1.2rem] bg-gradient-to-l from-transparent to-lime-300 opacity-90"></span>
        </span>
        <label className={label}>Name</label>
        <input
          type="text"
          name="name"
          value={data.name}
          className={input}
          onChange={handleChange}
        />
        <label className={label}>Email</label>
        <input
          type="email"
          name="email"
          value={data.email}
          className={input}
          onChange={handleChange}
        />
        <label className={label}>Message</label>
        <textarea
          rows={4}
          name="message"
          value={data.message}
          className={input}
          onChange={handleChange}
        // onChange={(e) => handleChange(e)}
        />

        <span className="h-[0.2rem] w-full mt-[1.2rem] bg-gradient-to-l from-transparent to-lime-300 opacity-90"></span>

        <input
          type="submit"
          value="Send"
          disabled={loading}
          className="text-md border border-lime-300 p-2 px-6 rounded-full text-lime-300 font-[700] mx-auto my-4 hover:text-black hover:bg-amber-300 hover:border-amber-300"
        />
      </form>
    </motion.div>
  );
};

export default Contact;
