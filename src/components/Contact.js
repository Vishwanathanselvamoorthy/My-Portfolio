import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/paqgmoma"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300  py-4 font-semibold">
            Submit the form or shoot me an email :
            <span className="text-pink-600 ml-1">
              <a href="mailto:viswanathanselvamoorthy@gmail.com">
                viswanathanselvamoorthy@gmail.com
              </a>
            </span>
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-4 font-semibold rounded-lg "
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-4 rounded-lg font-semibold bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-8 rounded-lg font-semibold"
          placeholder="Your Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 py-3 px-3 rounded-lg font-bold my-8 mx-auto flex items-center">
          Let's Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
