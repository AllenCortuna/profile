import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  const label = "text-white text-md font-[600] mt-5 mb-2 space";
  const input = "rounded-lg p-2 text-md bg-zinc-700 ";
  return (
    <span className="mt-36 md:mt-44 flex justify-center w-full">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="p-4 flex flex-col rounded-lg w-[20rem] md:w-[24rem] border border-zinc-500 bg-zinc-800 bg-opacity-30 "
      >
        <span className="font-[800] text-xl text-lime-300 mb-5 w-full flex flex-col">
          Contact
          <p className="text-zinc-400 font-[300] text-xs">Send a message</p>
          <span className="h-[0.2rem] w-full mt-[1.2rem] bg-gradient-to-l from-transparent to-lime-300 opacity-90"></span>
        </span>
        <label className={label}>Name</label>
        <input type="text" name="user_name" className={input} />
        <label className={label}>Email</label>
        <input type="email" name="user_email" className={input} />
        <label className={label}>Message</label>
        <textarea name="message" className={input} />

        <span className="h-[0.2rem] w-full mt-[1.2rem] bg-gradient-to-l from-transparent to-lime-300 opacity-90"></span>

        <input type="submit" value="Send" className="text-md border border-lime-300 p-2 px-6 rounded-full text-lime-300 font-[700] mr-auto my-4 hover:text-black hover:bg-amber-300 hover:border-amber-300 " />
      </form>
    </span>
  );
};

export default ContactUs;
