"use client";
// @flow strict
import { isValidEmail } from "@/utils/check-email";
import axios from "axios";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    try {
      setIsLoading(true);
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_APP_URL}/api/contact`,
        userInput
      );
      
      toast.success("Message sent successfully!");
      setUserInput(() => ({
        name: "",
        email: "",
        message: "",
      }));
    } catch (error) {
      toast.error(error?.response?.data?.message);
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <div>
      <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Contact Me or give me feedback</p>
      <div className="max-w-3xl text-[#e1ece2] rounded-lg border border-[#4a6b4f] p-3 lg:p-5 bg-[#164c28]">
        <p className="text-sm text-[#b8c9ba]">
          {"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="text-base text-[#e1ece2]">Your Name:</label>
            <input
              className="bg-[#264f3a] w-full border rounded-md border-[#4a6b4f] focus:border-[#16f2b3] text-[#e1ece2] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength="100"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-[#e1ece2]">Your Email:</label>
            <input
              className="bg-[#264f3a] w-full border rounded-md border-[#4a6b4f] focus:border-[#16f2b3] text-[#e1ece2] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              maxLength="100"
              required={true}
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
            />
            {error.email && (
              <p className="text-sm text-[#e74c3c]">Please provide a valid email!</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base text-[#e1ece2]">Your Message:</label>
            <textarea
              className="bg-[#264f3a] w-full border rounded-md border-[#4a6b4f] focus:border-[#16f2b3] text-[#e1ece2] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              maxLength="500"
              name="message"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              rows="4"
              value={userInput.message}
            />
          </div>

          <div className="flex flex-col items-center gap-3">
            {error.required && (
              <p className="text-sm text-[#e74c3c]">All fields are required!</p>
            )}
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-[#3a7c5a] to-[#4aa57a] px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out hover:text-white"
              role="button"
              onClick={handleSendMail}
              // disabled={isLoading}
            >
              {isLoading ? (
                <span>Sending Message...</span>
              ) : (
                <span className="flex items-center gap-1">
                  Send Message
                  <TbMailForward size={20} color="#e1ece2" />
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ContactForm;