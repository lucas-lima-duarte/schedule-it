import { Router } from 'express'
import Appointment from '../models/Appointment'

const router = Router()

router.post('/', async (req, res) => {
    try {
        const appointment = await Appointment.create(req.body)
        res.status(201).json(appointment)
    } catch (err) {
        res.status(400).json({ error: `Erro ao criar agendamento.` })
    }
})

router.get('/', (req, res) => {
    try {
        const appointments = Appointment.find().sort({ date: 1 })
        res.json(appointments);
    } catch (err) {
        res.status(400).json({ error: `Erro ao obter os agendamentos. ${err}` })
    }
})

export default router;
