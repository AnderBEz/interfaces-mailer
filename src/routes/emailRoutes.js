import { Router } from "express"
import { sendEmail } from "../controller/sendEmail.js"

const router = Router()

router.post('/submit', sendEmail)

export default router