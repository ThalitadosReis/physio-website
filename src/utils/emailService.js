const API_BASE_URL = 'http://localhost:3001/api'

// sending contact form email
export const sendContactEmail = async (formData) => {
  try {
    console.log('Sending contact form to backend...')

    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })

    const result = await response.json()

    if (response.ok) {
      console.log('Contact email sent successfully!')
      return {
        success: true,
        message: result.message
      }
    } else {
      console.error('Failed to send contact email:', result.message)
      return {
        success: false,
        message: result.message
      }
    }
  } catch (error) {
    console.error('Error sending contact email:', error)

    // is server running?
    if (error.message.includes('fetch')) {
      return {
        success: false,
        message: 'Unable to connect to server. Please make sure the backend is running on port 3001.'
      }
    }

    return {
      success: false,
      message: 'Failed to send email. Please try again later.'
    }
  }
}