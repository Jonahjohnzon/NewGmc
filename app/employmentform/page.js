"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Top from "../contact/component/Top";
import Footer from "../Component/FrontPage/Footer";

const schema = yup.object().shape({
  positionApplied: yup.string().required("Position applied for is required"),
  applicantName: yup.string().required("Name of applicant is required"),
  address: yup.string().required("Address is required"),
  phone: yup.string().matches(/^[0-9]+$/, "Must be only digits").required("Phone number is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  facebook: yup.string().notRequired(),
  instagram: yup.string().notRequired(),
  twitter: yup.string().notRequired(),
  previousOffice: yup.string().required("Previous office worked is required"),
  nextOfKinName: yup.string().required("Next of Kin's name is required"),
  nextOfKinPhone: yup.string().matches(/^[0-9]+$/, "Must be only digits").required("Next of Kin's phone number is required"),
  dateOfBirth: yup.date().required("Date of birth is required"),
  placeOfBirth: yup.string().required("Place of birth is required"),
  stateOfOrigin: yup.string().required("State of origin is required"),
  localGovernment: yup.string().required("Local government area is required"),
  identification: yup.string().required("Means of Identification is required"),
  passportPhoto: yup.mixed().required("Passport photo is required"),
});

const ApplicationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted", data);
  };

  return (
    <div>
      <Top Title={"Employment Form"} />
      <div className="max-w-3xl mx-auto text-black p-6 my-5 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">EMPLOYMENT FORM</h2>
        <div className="text-sm text-red-600 font-semibold"><p>(a) All answers must be in block letters</p> <p>(b) If any information is wrongly given, you will be arrested</p> <p>(c) All spaces must be filled completely</p> <p>(d) False statements will make you a suspect, be truthful.</p></div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <div>
            <label className="block font-semibold">Position Applied For:</label>
            <input {...register("positionApplied")} type="text" className="w-full border p-2 rounded-lg" />
            <p className="text-red-500 text-sm">{errors.positionApplied?.message}</p>
          </div>

          <div>
            <label className="block font-semibold">Name of Applicant:</label>
            <input {...register("applicantName")} type="text" className="w-full border p-2 rounded-lg" />
            <p className="text-red-500 text-sm">{errors.applicantName?.message}</p>
          </div>

          <div>
            <label className="block font-semibold">Address:</label>
            <input {...register("address")} type="text" className="w-full border p-2 rounded-lg" placeholder="(State your nearest bus stop)" />
            <p className="text-red-500 text-sm">{errors.address?.message}</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Phone Number:</label>
              <input {...register("phone")} type="text" className="w-full border p-2 rounded-lg" />
              <p className="text-red-500 text-sm">{errors.phone?.message}</p>
            </div>
            <div>
              <label className="block font-semibold">E-Mail:</label>
              <input {...register("email")} type="email" className="w-full border p-2 rounded-lg" />
              <p className="text-red-500 text-sm">{errors.email?.message}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Facebook:</label>
              <input {...register("facebook")} type="text" className="w-full border p-2 rounded-lg" />
            </div>
            <div>
              <label className="block font-semibold">Instagram:</label>
              <input {...register("instagram")} type="text" className="w-full border p-2 rounded-lg" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Twitter:</label>
              <input {...register("twitter")} type="text" className="w-full border p-2 rounded-lg" />
            </div>
            <div>
              <label className="block font-semibold">PreviousOffice:</label>
              <input {...register("previousOffice")} type="text" className="w-full border p-2 rounded-lg" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">NextOfKinName:</label>
              <input {...register("nextOfKinName")} type="text" className="w-full border p-2 rounded-lg" />
            </div>
            <div>
              <label className="block font-semibold">NextOfKinPhone:</label>
              <input {...register("nextOfKinPhone")} type="text" className="w-full border p-2 rounded-lg" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">Date of Birth:</label>
              <input {...register("dateOfBirth")} type="date" className="w-full border p-2 rounded-lg" />
              <p className="text-red-500 text-sm">{errors.dateOfBirth?.message}</p>
            </div>
            <div>
              <label className="block font-semibold">Place of Birth:</label>
              <input {...register("placeOfBirth")} type="text" className="w-full border p-2 rounded-lg" />
              <p className="text-red-500 text-sm">{errors.placeOfBirth?.message}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold">State of Origin:</label>
              <input {...register("stateOfOrigin")} type="text" className="w-full border p-2 rounded-lg" />
              <p className="text-red-500 text-sm">{errors.stateOfOrigin?.message}</p>
            </div>
            <div>
              <label className="block font-semibold">Local Government Area:</label>
              <input {...register("localGovernment")} type="text" className="w-full border p-2 rounded-lg" />
              <p className="text-red-500 text-sm">{errors.localGovernment?.message}</p>
            </div>
          </div>
          <div>
            <label className="block font-semibold">Means of Identification:</label>
            <input {...register("identification")} type="text" className="w-full border p-2 rounded-lg" />
            <p className="text-red-500 text-sm">{errors.identification?.message}</p>
          </div>
          <div>
            <label className="block font-semibold">Upload Passport Photos:</label>
            <input {...register("passportPhoto")} type="file" className="w-full border p-2 rounded-lg" />
            <p className="text-red-500 text-sm">{errors.passportPhoto?.message}</p>
          </div>
          <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">Submit Application</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ApplicationForm;
