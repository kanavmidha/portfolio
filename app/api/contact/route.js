// export default function handler(req, res) {
//     console.log(req.body)
//     res.status(200).json({ message: 'Hello from Next.js!' })
// }
import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'


export async function POST(request) {

    const values = await request.json()

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    })

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: 'kanavmiddha0001@gmail.com',
        subject: `New Contact form submission from ${values.name}`,
        text: `
        Name: ${values.name}
        Email: ${values.email}
        Services Requested: ${values.services}
        Budget: ${values.budget}
        Message: ${values.message}`
    }

    try {
        await transporter.sendMail(mailOptions)
        // return response.status(200).json({success:true})
        return NextResponse.json({success:true}, {status: 200})
    } catch (error) {
        console.error('Error sending email:', error)
        // return response.status(500).json({ success: false, error: error.message })
        return NextResponse.json({success: false}, {error: error.message}, {status:500})
    }
}