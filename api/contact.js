import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, projectType, message, timeline, budget } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, email, and message are required' });
  }

  try {
    // Create transporter using Gmail SMTP (you'll need to set up App Password)
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'riley.clendenen@yahoo.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #5C7650;">New Contact Form Submission</h2>
          
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #3A5A40; margin-top: 0;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${projectType ? `<p><strong>Project Type:</strong> ${projectType}</p>` : ''}
            ${timeline ? `<p><strong>Timeline:</strong> ${timeline}</p>` : ''}
            ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}
          </div>
          
          <div style="background: #fff; padding: 20px; border-left: 4px solid #A3B18A;">
            <h3 style="color: #3A5A40; margin-top: 0;">Message</h3>
            <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background: #DAD7CD; border-radius: 8px; font-size: 14px; color: #666;">
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
            <p><strong>From:</strong> Riley Clendenen Portfolio Website</p>
          </div>
        </div>
      `,
      text: `
        New Contact Form Submission from ${name}
        
        Contact Details:
        Name: ${name}
        Email: ${email}
        ${phone ? `Phone: ${phone}` : ''}
        ${projectType ? `Project Type: ${projectType}` : ''}
        ${timeline ? `Timeline: ${timeline}` : ''}
        ${budget ? `Budget: ${budget}` : ''}
        
        Message:
        ${message}
        
        Submitted: ${new Date().toLocaleString()}
        From: Riley Clendenen Portfolio Website
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Log successful submission
    console.log('Email sent successfully:', {
      name,
      email,
      timestamp: new Date().toISOString(),
    });

    return res.status(200).json({ 
      message: 'Thank you for your message! I will get back to you soon.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    // Log the submission even if email fails
    console.log('Contact form submission (email failed):', {
      name,
      email,
      phone,
      projectType,
      message,
      timeline,
      budget,
      timestamp: new Date().toISOString(),
      error: error.message,
    });

    return res.status(500).json({ 
      message: 'There was an error sending your message. Please try again or email me directly.' 
    });
  }
}
