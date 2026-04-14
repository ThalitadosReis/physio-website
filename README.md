# Physio+ Website

A modern physiotherapy clinic website built with React, Vite, and Tailwind CSS. Ships a polished marketing site, dedicated pages for clinic information and treatment options, an appointment booking flow with date and time selection, and email handling for booking requests in local and Netlify deployments.

## Live Preview
https://physioplus-web.netlify.app/

## Tech Stack
- **Vite** · React · JavaScript
- **React Router** · Tailwind CSS
- **Motion** · Phosphor Icons
- **Express** · Nodemailer

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage |
| `/about` | Practitioner profile, clinic values, and mission |
| `/services` | Treatment overview with service selection and booking entry points |
| `/contact` | Appointment booking form, service-prefill support, and FAQ section |

## Booking
The site handles appointment requests through `/api/booking`.

- Local development uses the Express server in `server.js`
- Netlify deploys use the function in `netlify/functions/api.js`
- `netlify.toml` rewrites `/api/*` requests to the Netlify function in production

## Getting Started
```bash
npm install
```

Start the local email/API server:
```bash
npm run start
```

Start the frontend dev server:
```bash
npm run dev
```

## Environment Variables
Create a `.env` file at the project root:
```env
GMAIL_USER=
GMAIL_APP_PASSWORD=
EMAIL_TO=
PORT=3001
```

## Scripts
```bash
npm run dev      # local frontend dev server
npm run build    # production build
npm run preview  # preview the production build
npm run lint     # run ESLint
npm run start    # local Express booking/API server
```