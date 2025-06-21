"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const resend_1 = require("../resend/resend");
exports.router = (0, express_1.Router)();
exports.router.post('/send-email', (req, res) => {
    try {
        const { to } = req.body;
        (0, resend_1.sendMail)(to);
        res.send({
            "Mensagem": "E-mail enviado!"
        });
    }
    catch (error) {
        console.log('Ocorreu um Erro', error);
        res.status(400).json({ error: "O campo é obrigatório..." });
    }
});
exports.router.get('/keep-alive', (req, res) => {
    res.send('Ok!');
});
