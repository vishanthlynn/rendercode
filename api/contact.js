// Vercel serverless function for contact form submission
// This file should be in /api/contact.js for Vercel deployment

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { name, email, company, message, package: packageName } = req.body

    // Basic validation
    if (!name || !email || !company || !message) {
      return res.status(400).json({ message: 'Missing required fields' })
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
    //    const zapierResponse = await fetch('YOUR_ZAPIER_WEBHOOK_URL', {
    //      method: 'POST',
    //      headers: { 'Content-Type': 'application/json' },
    //      body: JSON.stringify({ name, email, company, message, package: packageName }),
    //    })
    //
    // 2. Email service (SendGrid, Mailgun, etc.)
    //    const sgMail = require('@sendgrid/mail')
    //    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    //    await sgMail.send({ to: 'hello@rendercodestudios.com', from: email, subject: 'New Contact Form Submission', text: message })
    //
    // 3. CRM integration (HubSpot, Salesforce, etc.)
    // 4. Database storage (Firebase, Supabase, etc.)

    // Return success response
    return res.status(200).json({
      message: 'Form submitted successfully',
      success: true,
    })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return res.status(500).json({
      message: 'Internal server error',
      success: false,
    })
  }
}

