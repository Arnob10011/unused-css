import { NextResponse } from "next/server"
import clientPromise from '@/db/index.js'
import Contact from '@/db/models/ContactSchema.js'
import mongoose from "mongoose"
import * as EmailValidator from 'email-validator';

// mongoose.connect(process.env.MONGODB_URI);
// mongoose.Promise = global.Promise;


export async function POST(request, response){

try {


    const client = await clientPromise
    const data = await request.json()

    // validation of email, subject and text 
    if (!EmailValidator.validate(data.email)) throw new Error("Invalid email")
    if (data.subject.length > 31) throw new Error('length must me with in 30')
    if (data.text.length > 501) throw new Error('length must me with in 500')

    const database = client.db('feedback');
    const userdb = await database.collection('feed')
    await userdb.insertOne(data)  


    return NextResponse.json({ success: true, message: 'works'});

} catch (error) {
    console.log(error.message)
    return NextResponse.json({ success: false, error: error.message});
}

}

