"use server";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const formData = await req.formData();

    const fields = {};
    formData.forEach((value, key) => {
      fields[key] = value;
    });

    const {
      positionApplied,
      applicantName,
      address,
      phone,
      email,
      facebook,
      instagram,
      twitter,
      previousOffice,
      nextOfKinName,
      nextOfKinPhone,
      dateOfBirth,
      placeOfBirth,
      stateOfOrigin,
      localGovernment,
      identification,
    } = fields;

    if (fields.passportPhoto instanceof Blob) {
      const buffer = Buffer.from(await fields.passportPhoto.arrayBuffer());
      passportAttachment = {
        filename: fields.passportPhoto.name,
        content: buffer,
      };
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "jonahjohnzon@gmail.com",
        pass: "vunq ribs xjoc jmdu",
      },
    });

    // Define email content
    const mailOptions = {
      from: {email},
      to: "jonahjohnzon@gmail.com",
      subject: "New Employment Application",
      text: `
        Position Applied For: ${positionApplied}
        Name of Applicant: ${applicantName}
        Address: ${address}
        Phone: ${phone}
        Email: ${email}
        Facebook: ${facebook}
        Instagram: ${instagram}
        Twitter: ${twitter}
        Previous Office: ${previousOffice}
        Next of Kin Name: ${nextOfKinName}
        Next of Kin Phone: ${nextOfKinPhone}
        Date of Birth: ${dateOfBirth}
        Place of Birth: ${placeOfBirth}
        State of Origin: ${stateOfOrigin}
        Local Government: ${localGovernment}
        Means of Identification: ${identification}
      `,
      attachments: passportAttachment ? [passportAttachment] : [],
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Application submitted successfully" }, { status: 200 });
  } catch (err) {
    console.error("Error processing form:", err);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
};
