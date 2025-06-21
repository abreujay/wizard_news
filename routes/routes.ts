import { Router, Request, Response } from "express";
import { sendMail } from '../resend/resend';
export const router = Router()
router.post('/send-email', (req: Request, res: Response): void => {
    try {
        const { to } = req.body;
        sendMail(to)
        res.send({
            "Mensagem": "E-mail enviado!"
        })
    } catch (error) {
        console.log('Ocorreu um Erro', error)
        res.status(400).json({ error: "O campo é obrigatório..." })
    }
})
router.head('/keep-alive', (req: Request, res: Response): void => {
    res.send('Ok!')
})