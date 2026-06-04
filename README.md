# Giovani — Gestor de Delivery

Site institucional de Giovani, especialista em gestão de delivery (iFood, Rappi, 99Food).

## Estrutura do projeto

```
giovani-delivery/
├── index.html          ← Home page
├── css/
│   └── style.css       ← Design tokens, reset, componentes compartilhados
├── js/
│   └── main.js         ← Nav mobile, scroll reveal, scripts compartilhados
├── pages/              ← Páginas futuras (serviços, contato, etc.)
├── assets/
│   └── icons/          ← Ícones e imagens
├── _redirects          ← Cloudflare Pages redirects
└── README.md
```

## Deploy no Cloudflare Pages

### 1. Suba o projeto para o GitHub

```bash
git init
git add .
git commit -m "feat: home page inicial"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/giovani-delivery.git
git push -u origin main
```

### 2. Conecte ao Cloudflare Pages

1. Acesse [pages.cloudflare.com](https://pages.cloudflare.com)
2. Clique em **Create a project → Connect to Git**
3. Selecione o repositório `giovani-delivery`
4. Configurações de build:
   - **Framework preset:** None
   - **Build command:** *(deixe em branco)*
   - **Build output directory:** `/` (raiz)
5. Clique em **Save and Deploy**

### 3. Domínio personalizado (opcional)

No painel do Cloudflare Pages → **Custom domains** → adicione `giovanidelivery.com.br`.

---

## Adicionando novas páginas

1. Crie o arquivo em `pages/nome-da-pagina.html`
2. Copie a estrutura do `index.html` (nav + footer + scripts)
3. Adicione o link na nav em todos os arquivos HTML

---

## Contato

- Instagram: [@giovani.ifood](https://www.instagram.com/giovani.ifood/)
- WhatsApp: +55 18 99763-2365
