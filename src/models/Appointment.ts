import mongoose, { Document, mongo, Schema } from 'mongoose';

export interface IAppointment extends Document {
    customer: string;
    date: Date;
    endDate: Date;
    status: 'scheduled' | 'completed' | 'cancelled'
    createdAt: Date
    updatedAt: Date
}

const AppointmentSchema = new Schema(
    {
        customer: { type: String, required: true },
        date: { type: Date, required: true },
        endDate: { type: Date, required: true },
        status: {
            type: String,
            enum: ['scheduled', 'completed', 'cancelled'],
            default: 'scheduled'
        }
    }, { timestamps: true }
);

export default mongoose.model<IAppointment>('Appointment', AppointmentSchema)
