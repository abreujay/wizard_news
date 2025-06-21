# Wizard News - Envio de Notícias por Email

Projeto simples em Node.js com Express para buscar as principais notícias do dia e enviar por email utilizando a API da Resend.

---

## Funcionalidades

- Busca notícias atuais através de uma API externa (customizada).  
- Envia email com as notícias formatadas em HTML.  
- Endpoint REST para envio de email via requisição POST.  
- Keep-alive para manter o servidor ativo em plataformas como Render.

---

## Tecnologias utilizadas

- Node.js  
- Express  
- TypeScript  
- Resend API (envio de email)  
- Cron / setTimeout para agendamento  
- dotenv para variáveis de ambiente

---

## Como usar

1. Clone o repositório:  
   ```bash
   git clone https://github.com/abreujay/wizard_news.git
   ```
2. Instale as dependências:  
   ```bash
   npm install
   ```
3. Configure as variáveis de ambiente no arquivo `.env`:  
   ```env
   RESENDAPIKEY=seu_token_aqui
   NEWSAPIKEY=seu_token_aqui
   ```
4. Execute o servidor:  
   ```bash
   npm run dev
   ```
5. Faça uma requisição POST para:  
   ```
   POST /api/send-email
   ```
   com o corpo JSON:  
   ```json
   {
     "to": "email@exemplo.com"
   }
   ```

---

## Considerações

- O domínio do remetente padrão é `onboarding@resend.dev`.
- Na versão gratuita da Resend, você só pode enviar e-mails para o endereço cadastrado na conta, a menos que configure um domínio próprio ou faça upgrade. Por isso, o envio para outros e-mails funciona só para testes no seu e-mail registrado.
- Para usar seu domínio personalizado, configure no painel da Resend e ajuste os registros DNS.
- Ideal para aprendizado e projetos pequenos.

---

## Contato

Desenvolvido por [Jonathan Abreu](https://github.com/abreujay).

---

## Licença

MIT License
