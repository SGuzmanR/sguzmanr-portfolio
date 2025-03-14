import { EmailTemplate } from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const content = (
      <EmailTemplate
        firstName={name}
        message={message}
      />
    );

    try {
      const { data, error } = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>', // Sender email
        to: ['sguzmanr2@gmail.com'], // Replace with your email
        subject: `Message from ${name} <${email}>`,
        react: content,
      });

      if (error) {
        return res.status(400).json({ error: 'Error sending email.' });
      }

      return res.status(200).json({ message: 'Email sent successfully!', data });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
};