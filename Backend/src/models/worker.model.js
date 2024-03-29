import mongoose, {Schema} from "mongoose";

const workerSchema = new Schema(
    {
        user: { 
            type: Schema.Types.ObjectId, 
            ref: 'User' 
        },
        skills: [String],
        experience: Number,
        certifications: [String],
        location: String,
        serviceArea: String,
        currentJobs: [
            { 
                type: Schema.Types.ObjectId, 
                ref: 'Service' 
            }
        ],
        jobHistory: [
            { 
                type: Schema.Types.ObjectId, 
                ref: 'Service' 
            }
        ],
        messageNotifications: [
            { 
                type: Schema.Types.ObjectId, 
                ref: 'Message' 
            }
        ]
    },
    {
        timestamps: true
    }
);

export const Worker = mongoose.model("Worker", workerSchema)