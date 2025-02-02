import { Router } from 'express'
import { AppointmentController } from '../controllers/Appointments.controller'

const router = Router()
const controller = new AppointmentController();


router.post('/', controller.create)
router.get('/', controller.getAll)

export default router;
