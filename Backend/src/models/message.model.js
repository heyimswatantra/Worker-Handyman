import mongoose, {Schema} from "mongoose";

const messageSchema = new Schema(
    {
        sender: { 
            type: Schema.Types.ObjectId, 
            ref: 'User' 
        },
        receiver: { 
            type: Schema.Types.ObjectId, 
            ref: 'User' 
        },
        content: String,
        timestamp: { 
            type: Date, 
            default: Date.now 
        },
        readStatus: Boolean
});

export const Message = mongoose.model("Message", messageSchema)