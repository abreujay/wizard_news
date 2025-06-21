import { Resend } from "resend";
import { searchNews } from "../news-api/news-api";
import dotenv from 'dotenv';
dotenv.config();
const resendApiKey = process.env.RESENDAPIKEY;
const resend = new Resend(resendApiKey);
export async function sendMail(to: string) {
    try {
      const news = await searchNews();
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
      await resend.emails.send({
        from: 'Wizard News! <onboarding@resend.dev>',
        to: [to],
        subject: 'Principais Notícias',
        html: htmlContent,
      });
      console.log('Email enviado com sucesso!');
    } catch (error) {
      console.error('Erro ao enviar email:', error);
    }
    setTimeout(() => {sendMail(to)}, 24 * 60 * 60 * 1000);
  }
  