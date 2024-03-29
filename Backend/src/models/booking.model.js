import mongoose, {Schema} from "mongoose";

const bookingSchema = new Schema(
    {
        customer: { 
            type: Schema.Types.ObjectId, 
            ref: 'Customer' 
        },
        worker: { 
            type: Schema.Types.ObjectId, 
            ref: 'Worker' 
        },
        service: { 
            type: Schema.Types.ObjectId, 
            ref: 'Service' 
        },
        bookingDate: Date,
        startTime: Date,
        endTime: Date,
        status: { 
            type: String, 
            enum: ['pending', 'confirmed', 'completed'] 
        }
    }
);

export const Booking = mongoose.model("Booking", bookingSchema)