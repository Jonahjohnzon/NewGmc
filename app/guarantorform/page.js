"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Top from "../contact/component/Top";

const schema = yup.object().shape({
  guaranteedPerson: yup.string().required("Name of the person you guarantee is required"),
  guaranteedPhone: yup.string().matches(/^[0-9]+$/, "Must be only digits").required("Phone number of the person you guarantee is required"),
  positionApplied: yup.string().required("Position applied for is required"),
  guarantorName: yup.string().required("Guarantor's name is required"),
  guarantorAddress: yup.string().required("Guarantor's address is required"),
  phone: yup.string().matches(/^[0-9]+$/, "Must be only digits").required("Phone number is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  identification: yup.string().required("Means of Identification is required"),
  passportPhoto: yup.mixed().required("Passport photo is required"),
});

const GuarantorForm = () => {
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
      <Top Title={"Guarantor's Form"} />
      <div className="max-w-3xl mx-auto text-black p-6 my-5 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-4">GUARANTOR FORM</h2>
        <div className="text-sm text-red-600 font-semibold"><p>(a) All answers must be in block letters</p> <p>(b) If any information is wrongly given, you will be arrested</p> <p>(c) All spaces must be filled completely</p> <p>(d) False statements will make you a suspect, be truthful.</p></div>
        <form onSubmit={handleSubmit(onSubmit)} className="mt-4 space-y-4">
          <div>
            <label className="block font-semibold">Name of Person You Guarantee:</label>
            <input {...register("guaranteedPerson")} type="text" className="w-full border p-2 rounded-lg" />
            <p className="text-red-500 text-sm">{errors.guaranteedPerson?.message}</p>
          </div>

          <div>
            <label className="block font-semibold">Phone Number of Person You Guarantee:</label>
            <input {...register("guaranteedPhone")} type="text" className="w-full border p-2 rounded-lg" />
            <p className="text-red-500 text-sm">{errors.guaranteedPhone?.message}</p>
          </div>

          <div>
            <label className="block font-semibold">Position He Applied For:</label>
            <input {...register("positionApplied")} type="text" className="w-full border p-2 rounded-lg" />
            <p className="text-red-500 text-sm">{errors.positionApplied?.message}</p>
          </div>

          <div>
            <label className="block font-semibold">Name of Guarantor:</label>
            <input {...register("guarantorName")} type="text" className="w-full border p-2 rounded-lg" />
            <p className="text-red-500 text-sm">{errors.guarantorName?.message}</p>
          </div>

          <div>
            <label className="block font-semibold">Address of Guarantor:</label>
            <input {...register("guarantorAddress")} type="text" className="w-full border p-2 rounded-lg" placeholder="(State your nearest bus stop)" />
            <p className="text-red-500 text-sm">{errors.guarantorAddress?.message}</p>
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

          <div>
            <label className="block font-semibold">Means of Identification (NIN, Passport, etc.):</label>
            <input {...register("identification")} type="text" className="w-full border p-2 rounded-lg" />
            <p className="text-red-500 text-sm">{errors.identification?.message}</p>
          </div>

          <div>
            <label className="block font-semibold">Upload Passport Photos:</label>
            <input {...register("passportPhoto")} type="file" className="w-full border p-2 rounded-lg" />
            <p className="text-red-500 text-sm">{errors.passportPhoto?.message}</p>
          </div>

          <button className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700">Submit Guarantor Form</button>
        </form>
      </div>
    </div>
  );
};

export default GuarantorForm;
