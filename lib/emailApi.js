import nodemailer from "nodemailer";

const getEmailConfig = () => {
  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD?.replace(/\s+/g, "");
  const emailTo = process.env.EMAIL_TO || gmailUser;

  return {
    gmailUser,
    gmailAppPassword,
    emailTo,
  };
};

export const hasEmailConfig = () => {
  const { gmailUser, gmailAppPassword } = getEmailConfig();
  return Boolean(gmailUser && gmailAppPassword);
};

export const createTransporter = () => {
  const { gmailUser, gmailAppPassword } = getEmailConfig();

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  });
};

const isValidEmail = (value = "") =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());

export const validateBookingPayload = ({
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

export const sendContactEmail = async ({
  name,
  email,
  phone,
  subject,
  message,
}) => {
  const { gmailUser, emailTo } = getEmailConfig();

  if (!hasEmailConfig()) {
    return {
      success: true,
      statusCode: 200,
      message: "Form submitted successfully (demo mode - check server console)",
    };
  }

  const transporter = createTransporter();

  await transporter.sendMail({
    from: gmailUser,
    to: emailTo,
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
  });

  return {
    success: true,
    statusCode: 200,
    message: "Contact email sent successfully!",
  };
};

export const sendBookingEmail = async ({
  name,
  email,
  phone,
  service,
  date,
  time,
  message,
}) => {
  const validationError = validateBookingPayload({
    name,
    email,
    phone,
    service,
    date,
    time,
  });

  if (validationError) {
    return {
      success: false,
      statusCode: 400,
      message: validationError,
    };
  }

  const { gmailUser, emailTo } = getEmailConfig();

  if (!hasEmailConfig()) {
    return {
      success: true,
      statusCode: 200,
      message:
        "Booking submitted successfully (demo mode - check server console)",
    };
  }

  const transporter = createTransporter();

  await transporter.sendMail({
    from: gmailUser,
    to: emailTo,
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
  });

  return {
    success: true,
    statusCode: 200,
    message: "Booking request sent successfully!",
  };
};
