const nodemailer = require("nodemailer");
require('dotenv').config();

async function main(toEmail, subject, name, email, message) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_ID,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const emailHTML = `
    <h2>New Customer Details</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;
 
  let info = await transporter.sendMail({
    from: `Donyati Website New Customer Enquiry <${process.env.EMAIL_ID}>`,
    to: process.env.EMAIL_ID,
    subject: subject,
    html: emailHTML
  });
}

module.exports = {
  mailService: main
};