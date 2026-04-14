import dotenv from "dotenv";
import { sendBookingEmail } from "../../lib/emailApi.js";

dotenv.config();

const json = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  },
  body: JSON.stringify(body),
});

const parseBody = (event) => {
  if (!event.body) return {};

  try {
    return JSON.parse(event.body);
  } catch {
    return null;
  }
};

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return json(204, {});
  }

  if (event.httpMethod !== "POST") {
    return json(405, {
      success: false,
      message: "Method not allowed.",
    });
  }

  const payload = parseBody(event);

  if (payload === null) {
    return json(400, {
      success: false,
      message: "Invalid JSON payload.",
    });
  }

  try {
    if (event.path.endsWith("/booking")) {
      const result = await sendBookingEmail(payload);
      return json(result.statusCode, {
        success: result.success,
        message: result.message,
      });
    }

    return json(404, {
      success: false,
      message: "Not found.",
    });
  } catch (error) {
    console.error("Netlify function error:", error);
    return json(500, {
      success: false,
      message: "Failed to process request. Please try again later.",
    });
  }
};
