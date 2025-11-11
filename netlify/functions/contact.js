// Netlify serverless function for contact form submission
// This file should be in /netlify/functions/contact.js for Netlify deployment

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Method not allowed' }),
    }
  }

  try {
    const { name, email, company, message, package: packageName } = JSON.parse(
      event.body
    )

    // Basic validation
    if (!name || !email || !company || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Missing required fields' }),
      }
    }

    // Log the submission (replace with actual email/CRM integration)
    console.log('Contact form submission:', {
      name,
      email,
      company,
      message,
      package: packageName,
      timestamp: new Date().toISOString(),
    })

    // TODO: Replace with actual integration
    // Options:
    // 1. Zapier Webhook: POST to your Zapier webhook URL
    //    const fetch = require('node-fetch')
    //    await fetch('YOUR_ZAPIER_WEBHOOK_URL', {
    //      method: 'POST',
    //      headers: { 'Content-Type': 'application/json' },
    //      body: JSON.stringify({ name, email, company, message, package: packageName }),
    //    })
    //
    // 2. Email service (SendGrid, Mailgun, etc.)
    // 3. CRM integration (HubSpot, Salesforce, etc.)
    // 4. Database storage (Firebase, Supabase, etc.)

    // Return success response
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Form submitted successfully',
        success: true,
      }),
    }
  } catch (error) {
    console.error('Error processing contact form:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Internal server error',
        success: false,
      }),
    }
  }
}

