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
Instale as dependências:

bash
Copiar
Editar
npm install
Configure as variáveis de ambiente no arquivo .env:

env
Copiar
Editar
RESENDAPIKEY=seu_token_aqui
Execute o servidor:

bash
Copiar
Editar
npm run dev
Faça uma requisição POST para:

bash
Copiar
Editar
POST /api/send-email
com o corpo JSON:

json
Copiar
Editar
{
  "to": "email@exemplo.com"
}
Considerações
O domínio do remetente padrão é onboarding@resend.dev.

Para usar seu domínio personalizado, configure no painel da Resend e ajuste os registros DNS.

Ideal para aprendizado e projetos pequenos.

Contato
Desenvolvido por Jonathan Abreu.
