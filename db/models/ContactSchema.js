import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Please provide an email'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please provide a valid email',
      ],
    },
    subject: {
      type: String,
      required: [true, 'Please provide a subject'],
      maxlength: [30, 'Subject cannot be more than 30 characters'],
    },
    text: {
      type: String,
      required: [true, 'Please provide a message'],
      maxlength: [500, 'Message cannot be more than 500 characters'],
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Contact || mongoose.model('Contact', contactSchema);
