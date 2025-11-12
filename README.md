# Physio+ Website

A modern, responsive physiotherapy clinic website built with React, featuring online booking, service information, and contact management.

## 🌟 Live Demo

**[View Live Demo](https://physioplus-website.vercel.app/)**

> 📱 Try the responsive design on mobile, tablet, and desktop!

## 📸 Screenshots

![Desktop Screenshot](https://res.cloudinary.com/douen1dwv/image/upload/v1762962848/default/Physio__4.52pm_11-12_1_e324n0.jpg)

## 🚀 Features

- **Responsive Design**: Mobile-first approach with desktop optimization
- **Online Booking System**: Complete booking form with date/time selection
- **Service Management**: Interactive service browser with detailed information
- **Contact Forms**: Contact form with email integration
- **Email Integration**: Automated email notifications for bookings and inquiries
- **Modern UI**: Clean design with custom Tailwind CSS styling
- **Performance Optimised**: Fast loading with modern React patterns

## 🛠️ Tech Stack

### Frontend
- **React 19**
- **Tailwind CSS 4** 
- **Lucide React** 
- **React Day Picker**

### Backend
- **Express.js**
- **Nodemailer**

## 📦 Installation

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


## 🚦 API Endpoints

### POST `/api/contact`
Submit contact form with subject categorization

### POST `/api/booking`
Submit booking request with date/time preferences
