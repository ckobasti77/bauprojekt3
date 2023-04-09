import React, { useContext } from "react";
import { LanguageContext } from "../context/context";

import { Applicant, Request, Rules } from "./components";

const Form = () => {
  const { language } = useContext(LanguageContext);

  return (
    <form
      action="https://formsubmit.co/jocikam738@gmail.com"
      method="POST"
      className="w-full md:w-[640px] mx-auto form p-4 rounded-3xl"
    >
      <div className="w-full md:w-[600px] md:px-0 md:mx-auto">
        <Applicant />
      </div>
      {/* <hr className="bg-gray-500 h-[1.2px] text-black" /> */}
      <div className="w-full md:w-[600px] md:px-0 md:mx-auto">
        <Request />
        <button
          type="submit"
          className="py-3 px-6 rounded-xl mx-auto block my-8 bg-[#2EA295] hover:bg-[#2EA295]/75 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white font-medium"
        >
          {language === "cir" ? "Поднеси захтев" : "Podnesi zahtev"}
        </button>
        <Rules />
      </div>
      {/* <hr className="bg-gray-500 h-[1.2px] text-black" /> */}
    </form>
  );
};

export default Form;
