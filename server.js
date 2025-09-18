import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter for Gmail
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    console.log("Received contact form submission:", { name, email });

    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.log("Email service not configured - logging form data:");
      console.log({ name, email, message });
      return res.json({
        success: true,
        message:
          "Form submitted successfully (demo mode - check server console)",
      });
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.EMAIL_TO || "dosreistha@gmail.com",
      replyTo: email,
      subject: `New Contact Form: From ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${message.replace(/\n/g, "<br>")}
        </div>
        <hr>
        <p><small>Submitted: ${new Date().toLocaleString()}</small></p>
      `,
    };

    console.log("Sending contact email...");
    const info = await transporter.sendMail(mailOptions);
    console.log("Contact email sent:", info.messageId);

    res.json({
      success: true,
      message: "Contact email sent successfully!",
    });
  } catch (error) {
    console.error("Error sending contact email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send email. Please try again later.",
    });
  }
});

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`)
})