const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Resend } = require("resend");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000; // ✅ IMPORTANT for Render compatibility

const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ CORS: Allow GitHub Pages
app.use(cors({
  origin: 'https://pendemshivani.github.io', // allow frontend domain
  methods: ['POST'],
  credentials: false
}));

// ✅ Parse JSON requests
app.use(bodyParser.json());

// ✅ Contact POST endpoint
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

// ✅ Fallback route to test backend status
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
