export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, projectType, message, timeline, budget } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required' });
  }

  // Log the submission for now (you can check Vercel logs)
  console.log('Contact form submission:', {
    name,
    email,
    phone,
    projectType,
    message,
    timeline,
    budget,
    timestamp: new Date().toISOString(),
  });

        // For now, we'll just log the submission and return success
        // You can integrate with email services like:
        // - SendGrid
        // - Mailgun
        // - Nodemailer with Gmail
        // - Formspree
        // - Netlify Forms
        // 
        // Email submissions will be sent to: riley.clendenen@yahoo.com

        return res.status(200).json({ 
          message: 'Thank you for your message! I will get back to you soon.' 
        });
}
