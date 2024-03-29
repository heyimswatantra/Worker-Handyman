import mongoose, {Schema} from "mongoose";


const serviceSchema = new Schema(
    {
        title: String,
        description: String,
        category: String,
        price: Number,
        duration: Number,
        worker: { 
            type: Schema.Types.ObjectId, 
            ref: 'Worker' 
        },
        customer: { 
            type: Schema.Types.ObjectId, 
            ref: 'Customer' 
        },
        status: { 
            type: String, 
            enum: ['pending', 'confirmed', 'completed'] 
        }
    }
);

export const Service = mongoose.model("Service", serviceSchema)