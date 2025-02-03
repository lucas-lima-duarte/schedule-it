import { Router } from 'express'
import { AppointmentController } from '../controllers/Appointments.controller'
import { authMiddleware } from '../middlewares/Auth.middleware';


const router = Router()
const controller = new AppointmentController();

router.use(authMiddleware)

router.post('/', controller.create)
router.get('/', controller.getAll)

export default router;
