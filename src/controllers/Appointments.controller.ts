import { Request, Response } from 'express'
import Appointment from '../models/Appointment'
import { AppointmetsService } from '../services/Appointments.service'

export class AppointmentController {

    service: AppointmetsService

    constructor() {
        this.service = new AppointmetsService();
    }

    create = async (req: Request, res: Response) => {
        try {
            const appointment = await this.service.create(req.body)
            res.status(201).json(appointment)
        } catch (err) {
            res.status(400).json({ error: `Erro ao criar agendamento.`, details: err })
        }
    }

    getAll = async (req: Request, res: Response) => {
        try {
            const appointments = await this.service.getAll()
            res.json(appointments);
        } catch (err) {
            res.status(400).json({ error: `Erro ao obter os agendamentos. ${err}` })
        }
    }
}
