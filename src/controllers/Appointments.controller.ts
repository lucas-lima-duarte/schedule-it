import { Request, Response } from 'express'
import Appointment from '../models/Appointment'

export class AppointmentController {

    create = async (req: Request, res: Response) => {
        try {
            const appointment = await Appointment.create(req.body)
            res.status(201).json(appointment)
        } catch (err) {
            res.status(400).json({ error: `Erro ao criar agendamento.` })
        }
    }

    getAll = async (req: Request, res: Response) => {
        try {
            const appointments = await Appointment.find().sort({ date: 1 })
            res.json(appointments);
        } catch (err) {
            res.status(400).json({ error: `Erro ao obter os agendamentos. ${err}` })
        }
    }
}
