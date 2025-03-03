"use server"
import nodemailer from "nodemailer";


export const POST = async(req)=>{
    try{
        const data = await req.json()
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
          }= data


          const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
              user: "your-email@gmail.com",
              pass: "your-password",
            },
          });

          const mailOptions = {
            from: "your-email@gmail.com",
            to: "recipient-email@example.com",
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
          };

          if (files.passportPhoto) {
            const filePath = files.passportPhoto.filepath;
            const fileContent = fs.readFileSync(filePath);
      
            mailOptions.attachments = [
              {
                filename: files.passportPhoto.originalFilename,
                content: fileContent,
              },
            ];
          }
          await transporter.sendMail(mailOptions);
          console.log(mailOptions)

    }
    catch(err)
    {

    }
}