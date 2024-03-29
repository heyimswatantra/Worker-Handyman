import mongoose, {Schema} from "mongoose";

const notificationSchema = new Schema(
    {
        user: { 
            type: Schema.Types.ObjectId,
            ref: 'User' 
        },
        content: {
            type: String
        },
        timestamp: { 
            type: Date, 
            default: Date.now 
        },
        readStatus: Boolean
});

export const Notification = mongoose.model("Notification", notificationSchema)