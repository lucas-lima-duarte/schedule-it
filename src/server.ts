import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import mongoose from 'mongoose';
import appointmentsRouter from './routes/Appointments.routes';
import { config } from 'dotenv';

config();

const app = express()

app.use(cors());
app.use(helmet());
app.use(express.json())

mongoose.connect(process.env.MONGODB_URI || "")
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log('Failed to connect to MongoDB', err))

app.use('/api/appointments', appointmentsRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
