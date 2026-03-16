import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import {
  createTransporter,
  hasEmailConfig,
  sendBookingEmail,
  sendContactEmail,
} from "./lib/emailApi.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post("/api/contact", async (req, res) => {
  try {
    const result = await sendContactEmail(req.body);
    res.status(result.statusCode).json({
      success: result.success,
      message: result.message,
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
    const result = await sendBookingEmail(req.body);
    res.status(result.statusCode).json({
      success: result.success,
      message: result.message,
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
