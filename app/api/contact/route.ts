import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { COMPANY_EMAIL } from '@/lib/constants';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: COMPANY_EMAIL,
    pass: process.env.EMAIL_PASSWORD
  }
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, service } = body;

    const mailOptions = {
      from: COMPANY_EMAIL,
      to: COMPANY_EMAIL,
      subject: service ? `Service Inquiry: ${service}` : 'Website Contact Form',
      html: `
        <h2>New Service Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 