const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();
const port = 5000;

const resend = new Resend(process.env.RESEND_API_KEY);

app.use(cors());
app.use(bodyParser.json());

app.post("/api/contact", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: "Pendem Shivani <protfolio@resend.dev>",
      to: process.env.TO_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h3>New message from your portfolio 🚀</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br>${message}</p>
      `,
    });

    console.log("Email sent:", data);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, error: "Failed to send message" });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
