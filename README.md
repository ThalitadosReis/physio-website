# Physio+ Website

A modern, responsive physiotherapy clinic website built with React, featuring online booking, service information, and contact management.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with desktop optimization
- **Online Booking System**: Complete booking form with date/time selection
- **Service Management**: Interactive service browser with detailed information
- **Contact Forms**: Contact form with email integration
- **Email Integration**: Automated email notifications for bookings and inquiries
- **Modern UI**: Clean design with custom Tailwind CSS styling
- **Performance Optimized**: Fast loading with modern React patterns

## 🛠️ Tech Stack

### Frontend
- **React 19** - Latest React with modern hooks and features
- **React Router DOM** - Client-side routing and navigation
- **Tailwind CSS 4** - Modern utility-first CSS framework
- **Lucide React** - Beautiful, customizable icons
- **React Day Picker** - Accessible date picker component
- **Vite** - Lightning-fast build tool and dev server

### Backend
- **Express.js** - Minimal web framework for Node.js
- **Nodemailer** - Email sending functionality
- **CORS** - Cross-origin resource sharing middleware
- **dotenv** - Environment variable management

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Gmail account (for email functionality)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd physio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   GMAIL_USER=your-gmail-address@gmail.com
   GMAIL_APP_PASSWORD=your-app-password
   EMAIL_TO=recipient@example.com
   PORT=3001
   ```

4. **Gmail App Password Setup**
   - Enable 2-Factor Authentication on your Gmail account
   - Generate an App Password: Google Account → Security → App passwords
   - Use the generated 16-character password as `GMAIL_APP_PASSWORD`

### Development

1. **Start the backend server**
   ```bash
   node server.js
   ```

2. **Start the frontend development server**
   ```bash
   npm run dev
   ```

### Production Build

```bash
npm run build
npm run preview
```

## 📧 Email Configuration

The application supports two types of email notifications:

### Contact Form (`/api/contact`)
- Processes general inquiries
- Includes subject categorization
- Supports phone number and custom messages

### Booking Form (`/api/booking`)
- Handles appointment requests
- Includes service selection and preferred date/time
- Supports additional information field

## 📱 Pages and Components

### Pages
- **Home** - Hero, services overview, team introduction
- **About** - Detailed team information, values, and mission
- **Services** - Interactive service browser with booking functionality
- **Contact** - Contact information and inquiry form

### Key Components
- **BookingModal** - Complete booking system with date/time selection
- **Navbar** - Responsive navigation with active page tracking
- **Expertise** - Interactive service showcase
- **Footer** - Contact information and quick links

## 🚦 API Endpoints

### POST `/api/contact`
Submit contact form with subject categorization

### POST `/api/booking`
Submit booking request with date/time preferences

