import mongoose, { Document, mongo, Schema } from 'mongoose';

export interface IAppointment extends Document {
    client: string;
    service: string;
    date: Date;
    status: 'scheduled' | 'completed' | 'cancelled'
    createdAt: Date
    updatedAt: Date
}

const AppointmentSchema = new Schema(
    {
        client: { type: String, required: true },
        service: { type: String, required: true },
        date: { type: Date, required: true },
        status: {
            type: String,
            enum: ['scheduled', 'completed', 'cancelled'],
            default: 'scheduled'
        }
    }, { timestamps: true }
);

export default mongoose.model<IAppointment>('Appointment', AppointmentSchema)