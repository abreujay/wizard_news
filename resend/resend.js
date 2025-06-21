"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMail = sendMail;
const resend_1 = require("resend");
const news_api_1 = require("../news-api/news-api");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const resendApiKey = process.env.RESENDAPIKEY;
const resend = new resend_1.Resend(resendApiKey);
function sendMail(to) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const news = yield (0, news_api_1.searchNews)();
            const htmlContent = `
        <h2>📰 ACONTECENDO NO MUNDO!</h2>
        ${news.map(noticia => `
          <div style="margin-bottom: 20px; padding-bottom: 10px; border-bottom: 1px solid #ccc;">
            <h3 style="margin: 0; color: #2c3e50;">${noticia.title}</h3>
            <p style="margin: 5px 0 10px 0; color: #555;">${noticia.description || 'Sem descrição disponível.'}</p>
            <a href="${noticia.url}" style="color: #1e90ff;">Leia mais</a>
          </div>
        `).join('')}
      `;
            yield resend.emails.send({
                from: 'Wizard News! <onboarding@resend.dev>',
                to: [to],
                subject: 'Principais Notícias',
                html: htmlContent,
            });
            console.log('Email enviado com sucesso!');
        }
        catch (error) {
            console.error('Erro ao enviar email:', error);
        }
        setTimeout(() => { sendMail(to); }, 24 * 60 * 60 * 1000);
    });
}
