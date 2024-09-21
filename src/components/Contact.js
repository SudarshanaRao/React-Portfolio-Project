import React from 'react';
import footerBg from '../images/footer-bg-color.png';
import rightArrowWhite from '../images/right-arrow-white.png';

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full px-[12%] pt-20 py-10 scroll-mt-20 bg-no-repeat bg-[length:90%_auto] bg-center"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <h4 className="text-center mb-2 text-lg">Connect With Me</h4>
      <h2 className="text-center text-5xl">Get in Touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12">
        I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
      </p>

      <form
        method="POST"
        action="https://api.web3forms.com/submit"
        className="max-w-2xl mx-auto"
      >
        <input
          type="hidden"
          name="access_key"
          value="c6740f64-048d-4aa8-861e-c9bd83d693af"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            name="name"
            type="text"
            placeholder="Enter your Name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Enter your Email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            required
          />
        </div>

        <textarea
          name="message"
          rows="6"
          placeholder="Enter your Message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          required
        ></textarea>

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          Submit now
          <img src={rightArrowWhite} alt="right arrow icon" className="w-4" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
