const mongoose = require('mongoose');
const { Schema } = mongoose;

// User Schema
const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    userType: { type: String, enum: ['Worker', 'Customer'] },
    profilePicture: String,
    contactInformation: String,
    address: String
});

// Worker Profile Schema
const workerSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    skills: [String],
    experience: Number,
    certifications: [String],
    location: String,
    serviceArea: String,
    currentJobs: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
    jobHistory: [{ type: Schema.Types.ObjectId, ref: 'Service' }],
    messageNotifications: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
});

// Customer Profile Schema
const customerSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    paymentInformation: String,
    bookingHistory: [{ type: Schema.Types.ObjectId, ref: 'Booking' }],
    messageNotifications: [{ type: Schema.Types.ObjectId, ref: 'Message' }]
});

// Service Schema
const serviceSchema = new Schema({
    title: String,
    description: String,
    category: String,
    price: Number,
    duration: Number,
    worker: { type: Schema.Types.ObjectId, ref: 'Worker' },
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    status: { type: String, enum: ['pending', 'confirmed', 'completed'] }
});

// Booking Schema
const bookingSchema = new Schema({
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    worker: { type: Schema.Types.ObjectId, ref: 'Worker' },
    service: { type: Schema.Types.ObjectId, ref: 'Service' },
    bookingDate: Date,
    startTime: Date,
    endTime: Date,
    status: { type: String, enum: ['pending', 'confirmed', 'completed'] }
});

// Message Schema
const messageSchema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    receiver: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    timestamp: { type: Date, default: Date.now },
    readStatus: Boolean
});

// Notification Schema
const notificationSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    content: String,
    timestamp: { type: Date, default: Date.now },
    readStatus: Boolean
});

// Create models
const User = mongoose.model('User', userSchema);
const Worker = mongoose.model('Worker', workerSchema);
const Customer = mongoose.model('Customer', customerSchema);
const Service = mongoose.model('Service', serviceSchema);
const Booking = mongoose.model('Booking', bookingSchema);
const Message = mongoose.model('Message', messageSchema);
const Notification = mongoose.model('Notification', notificationSchema);

// Export models
module.exports = { User, Worker, Customer, Service, Booking, Message, Notification };
