import Appointment from "../models/Appointment"
import { Request } from "express"
export class AppointmetsService {
    create = async (req: Request) => {
        return Appointment.create(req.body)
    }

    getAll = async () => {
        return Appointment.find().sort({ date: 1 })
    }
}