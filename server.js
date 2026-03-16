import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const GMAIL_USER = process.env.GMAIL_USER;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
const EMAIL_TO = process.env.EMAIL_TO || GMAIL_USER;

// Middleware
app.use(cors());
app.use(express.json());

// Create transporter for Gmail
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });
};

const hasEmailConfig = () => Boolean(GMAIL_USER && GMAIL_APP_PASSWORD);

const isValidEmail = (value = "") =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

const validateBookingPayload = ({
  name,
  email,
  phone,
  service,
  date,
  time,
}) => {
  if (!name?.trim()) return "Name is required.";
  if (!isValidEmail(email)) return "A valid email is required.";
  if (!phone?.trim()) return "Phone is required.";
  if (!service?.trim()) return "Please select a service.";
  if (!date?.trim()) return "Please select a date.";
  if (!time?.trim()) return "Please select a time.";
  return null;
};

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    if (!hasEmailConfig()) {
      return res.json({
        success: true,
        message:
          "Form submitted successfully (demo mode - check server console)",
      });
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: GMAIL_USER,
      to: EMAIL_TO,
      replyTo: email,
      subject: `New Contact Form: ${subject || "No Subject"} - From ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : "<p><strong>Phone:</strong> Not provided</p>"}
        <p><strong>Subject:</strong> ${subject || "No subject selected"}</p>
        <p><strong>Message:</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${message ? message.replace(/\n/g, "<br>") : "No message provided"}
        </div>
        <hr>
        <p><small>Submitted: ${new Date().toLocaleString()}</small></p>
      `,
    };

    await transporter.sendMail(mailOptions);

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

// Booking form endpoint
app.post("/api/booking", async (req, res) => {
  try {
    const { name, email, phone, service, date, time, message } = req.body;

    const validationError = validateBookingPayload({
      name,
      email,
      phone,
      service,
      date,
      time,
    });

    if (validationError) {
      return res.status(400).json({
        success: false,
        message: validationError,
      });
    }

    if (!hasEmailConfig()) {
      return res.json({
        success: true,
        message:
          "Booking submitted successfully (demo mode - check server console)",
      });
    }

    const transporter = createTransporter();

    const mailOptions = {
      from: GMAIL_USER,
      to: EMAIL_TO,
      replyTo: email,
      subject: `Booking Request: ${service}`,
      html: `
        <h2>Booking Request</h2>
        <p><strong>Patient:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Preferred Time:</strong> ${time}</p>

        ${
          message
            ? `
        <p><strong>Additional Information:</strong></p>
        <div style="background: #f5f5f5; padding: 15px; border-radius: 5px;">
          ${message.replace(/\n/g, "<br>")}
        </div>
        `
            : ""
        }

        <hr>
        <p><small>Booking submitted: ${new Date().toLocaleString()}</small></p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "Booking request sent successfully!",
    });
  } catch (error) {
    console.error("Error sending booking email:", error);
    res.status(500).json({
      success: false,
      message: "Failed to send booking request",
    });
  }
});

// Start server
app.listen(PORT, async () => {
  console.log(`🚀 Server running on port ${PORT}`);

  if (!hasEmailConfig()) {
    return;
  }

  try {
    await createTransporter().verify();
  } catch (error) {
    console.error("Email transport verification failed:", error.message);
  }
});
