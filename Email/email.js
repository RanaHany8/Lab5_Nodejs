import nodemailer from "nodemailer";
import { template } from "./emailTemplate.js";
import jwt from "jsonwebtoken";

export default async function sendEmail(email) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "ranahany1003@gmail.com",
            pass: "gero aybv jbjs aync",   
        },
    });

  
    const emailToken = jwt.sign(email, "myEmail");

    const info = await transporter.sendMail({
       
        from: '"Note App Team" <ranahany1003@gmail.com>', 
        to: email, 
        subject: "Hello ✔ - Confirm Your Account",
        html: template(emailToken), 
    });

    console.log("Message sent:", info.messageId);
}