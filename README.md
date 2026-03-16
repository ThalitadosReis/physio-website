# Physio+ Website

Responsive physiotherapy clinic website built with React and Tailwind CSS. The project includes a service showcase, booking flow, FAQ section, and email handlers for appointment and contact requests.

## Live Preview

https://physioplus-web.netlify.app/

## Features

- Responsive marketing site for a physiotherapy practice
- Service overview page with interactive service selection
- Booking form with date and time selection
- FAQ accordion and contact flow
- Email sending for booking and contact submissions
- Shared UI components for headers, buttons, and section intros

## Tech Stack

### Frontend

- React 19
- React Router 7
- Tailwind CSS 4
- Motion
- Phosphor Icons

### Email Handling

- Netlify Functions
- Express for local development
- Nodemailer
- dotenv

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Create a `.env` file in the project root

```env
GMAIL_USER=your-gmail-address@gmail.com
GMAIL_APP_PASSWORD=your-app-password
EMAIL_TO=recipient@example.com
PORT=3001
```

3. Start the local backend server

```bash
npm run start
```

4. Start the frontend dev server

```bash
npm run dev
```

The frontend expects the backend on `http://localhost:3001` in development unless `VITE_API_BASE_URL` is set. In production on Netlify, `/api/*` is routed to the Netlify function defined in [netlify.toml](/Users/thalitadosreis/Desktop/projects/physio-website/netlify.toml).

## Email Setup

The backend uses Gmail SMTP through Nodemailer.

- Enable 2-factor authentication on the Gmail account
- Generate a Gmail app password
- Use that value for `GMAIL_APP_PASSWORD`

If email credentials are missing, the server falls back to demo mode and returns a success response without sending mail.

## Netlify Deployment

- Build command: `npm run build`
- Publish directory: `dist`
- Functions directory: `netlify/functions`
- Required environment variables: `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `EMAIL_TO`

The included [netlify.toml](/Users/thalitadosreis/Desktop/projects/physio-website/netlify.toml) rewrites `/api/contact` and `/api/booking` to the Netlify function and handles SPA routing for the React app.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run start
```

## API Endpoints

- `POST /api/contact`
- `POST /api/booking`
