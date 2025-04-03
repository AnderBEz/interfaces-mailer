import { sendAppointmentEmail } from "../services/emailService.js";


export const sendEmail = async (req, res) => {
    const { kind, code,  barcode, name, price_in, price_out, unit, description, presentation } = req.body;

    if (!kind || !code || !barcode || !name || !price_in || !price_out || !unit || !description || !presentation) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        sendAppointmentEmail(kind, code, barcode, name, price_in, price_out, unit, description, presentation);
        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Error sending email' });
    }
 }