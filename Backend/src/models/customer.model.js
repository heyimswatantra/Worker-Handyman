import mongoose, {Schema} from "mongoose";

const customerSchema = new Schema(
    {
        user: { 
            type: Schema.Types.ObjectId, 
            ref: 'User' 
        },
        paymentInformation: String,
        bookingHistory: [
            { 
                type: Schema.Types.ObjectId, 
                ref: 'Booking' 
            }
        ],
        messageNotifications: [
            { 
                type: Schema.Types.ObjectId, 
                ref: 'Message' 
            }
        ]
    }
);

export const Customer = mongoose.model("Customer", customerSchema)