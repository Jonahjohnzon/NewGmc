"use client";

import React from "react";
import Top from "../contact/component/Top";
import Footer from "../Component/FrontPage/Footer";

const ApplicationForm = () => {
  return (
    <div>
    <Top Title={"Employment Form"}/>
    <div className="max-w-3xl text-black mx-auto p-6 my-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4">EMPLOYMENT FORM</h2>
      <div className="text-sm text-red-600 font-semibold"><p>(a) All answers must be in block letters</p> <p>(b) If any information is wrongly given, you will be arrested</p> <p>(c) All spaces must be filled completely</p> <p>(d) False statements will make you a suspect, be truthful.</p></div>

      <form className="mt-4 space-y-4">
        <div>
          <label className="block font-semibold">Position Applied For:</label>
          <input type="text" className="w-full border p-2 rounded-lg" />
        </div>

        <div>
          <label className="block font-semibold">Name of Applicant:</label>
          <input type="text" className="w-full border p-2 rounded-lg" />
        </div>

        <div>
          <label className="block font-semibold">Address of Applicant:</label>
          <input type="text" className="w-full border p-2 rounded-lg" placeholder="(State your nearest bus stop)" />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">Phone Number:</label>
            <input type="text" className="w-full border p-2 rounded-lg" />
          </div>
          <div>
            <label className="block font-semibold">E-Mail:</label>
            <input type="email" className="w-full border p-2 rounded-lg" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">Facebook:</label>
            <input type="text" className="w-full border p-2 rounded-lg" />
          </div>
          <div>
            <label className="block font-semibold">Instagram:</label>
            <input type="text" className="w-full border p-2 rounded-lg" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">Twitter:</label>
            <input type="text" className="w-full border p-2 rounded-lg" />
          </div>
          <div>
            <label className="block font-semibold">Previous Office Worked:</label>
            <input type="text" className="w-full border p-2 rounded-lg" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">Next of Kin Full Name:</label>
            <input type="text" className="w-full border p-2 rounded-lg" />
          </div>
          <div>
            <label className="block font-semibold">Next of Kin Phone Number:</label>
            <input type="text" className="w-full border p-2 rounded-lg" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">Date of Birth:</label>
            <input type="date" className="w-full border p-2 rounded-lg" />
          </div>
          <div>
            <label className="block font-semibold">Place of Birth:</label>
            <input type="text" className="w-full border p-2 rounded-lg" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block font-semibold">State of Origin:</label>
            <input type="text" className="w-full border p-2 rounded-lg" />
          </div>
          <div>
            <label className="block font-semibold">Local Government Area:</label>
            <input type="text" className="w-full border p-2 rounded-lg" />
          </div>
        </div>

        <div>
          <label className="block font-semibold">Means of Identification (NIN, Passport, etc.):</label>
          <input type="text" className="w-full border p-2 rounded-lg" />
        </div>

        <div>
          <label className="block font-semibold">Upload Passport Photos:</label>
          <input type="file" className="w-full border p-2 rounded-lg" />
        </div>

        <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">
          Submit Application
        </button>
      </form>
    </div>
    <Footer/>
    </div>
  );
};

export default ApplicationForm;
