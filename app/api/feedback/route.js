import { NextResponse } from "next/server"
import clientPromise from '@/db/index.js'
import Contact from '@/db/models/ContactSchema.js'
import mongoose from "mongoose"
import * as EmailValidator from 'email-validator';
import nodemailer from 'nodemailer';

// mongoose.connect(process.env.MONGODB_URI);
// mongoose.Promise = global.Promise;


export async function POST(request, response){

try {

    const data = await request.json()

    // validation of email, subject and text 
    if (!EmailValidator.validate(data.email)) throw new Error("Invalid email")
    if (data.subject.length > 31) throw new Error('length must me with in 30')
    if (data.text.length > 501) throw new Error('length must me with in 500')

    let dbSaved = false;

    // Try to save to MongoDB
    try {
        const client = await clientPromise
        const database = client.db('feedback');
        const userdb = await database.collection('feed')
        await userdb.insertOne(data)
        dbSaved = true;
    } catch (dbError) {
        console.log("Database connection failed:", dbError.message)
        // Continue to send email even if DB fails
    }

    // Email notification
    if (process.env.GMAIL_APP_PASSWORD && process.env.GMAILS) {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL,
                pass: process.env.GMAIL_APP_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: data.email,
            to: process.env.GMAILS,
            subject: `Feedback Submission from ${data.email}`,
            html: `
                <h3>New Feedback Submission</h3>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Subject:</strong> ${data.subject}</p>
                <p><strong>Message:</strong></p>
                <p>${data.text}</p>
                <p><strong>Database Saved:</strong> ${dbSaved ? 'Yes' : 'No'}</p>
            `,
        }).catch((emailError) => {
            console.log("Email sending failed:", emailError.message)
        });
    }

    return NextResponse.json({ 
        success: true, 
        message: dbSaved ? 'Feedback saved and email sent' : 'Email sent'
    });

} catch (error) {
    console.log(error.message)
    return NextResponse.json({ success: false, error: error.message});
}

}

