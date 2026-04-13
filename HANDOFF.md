# Câmara de Mediação Zumbi dos Palmares — Handoff Document
# Documento de Entrega — Câmara de Mediação Zumbi dos Palmares

---

## 1. Project Overview / Visão Geral do Projeto

**EN:** This is the landing page for the Câmara de Mediação Zumbi dos Palmares, a racial conflict mediation chamber — a partnership between Faleck & Associados and Instituto e Universidade Zumbi dos Palmares. The site is a single-page static website with no backend.

**PT:** Esta é a landing page da Câmara de Mediação Zumbi dos Palmares, uma câmara especializada em conflitos raciais — parceria entre a Faleck & Associados e o Instituto e Universidade Zumbi dos Palmares. O site é uma página estática sem backend.

---

## 2. File Structure / Estrutura de Arquivos

```
/
├── index.html                          # Page structure and content / Estrutura e conteúdo da página
├── styles.css                          # All visual styles / Todos os estilos visuais
├── script.js                           # All interactive behaviour / Todo o comportamento interativo
├── NewLogo.png                         # Navigation logo / Logo da navegação
├── logo-zumbi-branco-completo.webp     # Footer logo / Logo do rodapé
├── Faleck_Picture_2.jpg                # Faleck card image / Imagem do card Faleck
├── faculdade-zumbi-dos-palmares.jpg    # Zumbi card image / Imagem do card Zumbi
├── rock-staar-NzIV4vOBA7s-unsplash.jpg # Hero background / Fundo do hero
├── HackneyPersonalUseOnly.ttf          # Hackney font (replace with licensed version)
└── Berthold Akzidenz Grotesk Extended/
    └── Berthold Akzidenz Grotesk Extended.otf  # Body font (replace with licensed version)
```

---

## 3. How to Edit Content / Como Editar o Conteúdo

**EN:** All text content is in `index.html`. Open it in any text editor (e.g. VS Code). Each section is clearly labelled with HTML comments like `<!-- HERO -->`, `<!-- QUEM SOMOS -->`, etc.

**PT:** Todo o conteúdo de texto está em `index.html`. Abra-o em qualquer editor de texto (ex.: VS Code). Cada seção está identificada com comentários HTML como `<!-- HERO -->`, `<!-- QUEM SOMOS -->`, etc.

### Common edits / Edições comuns:

**Changing text / Alterar texto:**
Find the section comment, edit the text between the HTML tags. Example:
```html
<h1>Resolução de conflitos <em>raciais</em> com excelência e respeito</h1>
```

**Changing a KPI number / Alterar número de KPI:**
Find `<div class="hero-stats">` and edit the `hero-stat-num` and `hero-stat-label` values.

**Changing an image / Trocar imagem:**
Place the new image file in the project folder, then find the `<img src="...">` tag and update the filename.

**Changing colors / Alterar cores:**
All brand colors are defined at the top of `styles.css` under `:root`:
```css
:root {
  --marrom: #121112;   /* Black / Preto */
  --laranja: #C22528;  /* Red / Vermelho */
  --amarelo: #FFD584;  /* Yellow / Amarelo */
}
```

---

## 4. Contact Form Setup / Configuração do Formulário de Contato

**EN:** The contact form currently sends messages via the user's email client (mailto). To make it work directly on the page without opening an email client, you need to set up Formspree:

1. Go to [formspree.io](https://formspree.io) and create an account with your business email
2. Click "New Form", give it a name, and copy the endpoint URL (format: `https://formspree.io/f/xxxxxxxx`)
3. Send the URL to your developer
4. The developer will update `script.js` — this takes about 5 minutes
5. Redeploy the site — the form will then send emails directly without opening an email client

**PT:** O formulário de contato atualmente envia mensagens pelo cliente de e-mail do usuário (mailto). Para que funcione diretamente na página sem abrir um cliente de e-mail, é necessário configurar o Formspree:

1. Acesse [formspree.io](https://formspree.io) e crie uma conta com seu e-mail corporativo
2. Clique em "New Form", dê um nome e copie a URL do endpoint (formato: `https://formspree.io/f/xxxxxxxx`)
3. Envie a URL ao desenvolvedor
4. O desenvolvedor atualiza o `script.js` — isso leva cerca de 5 minutos
5. Republique o site — o formulário passará a enviar e-mails diretamente sem abrir cliente de e-mail

**Formspree pricing / Preço Formspree:**
- Free tier: 50 submissions/month — sufficient for low traffic
- Paid plans start at $10/month for 1,000 submissions/month
- [formspree.io/pricing](https://formspree.io/pricing)

---

## 5. Font Licenses / Licenças de Fontes

**EN:** The project currently uses preview/personal-use font files. Before the site goes live commercially, both fonts must be licensed. You only need one weight per font.

**PT:** O projeto usa atualmente arquivos de fonte para uso pessoal/prévia. Antes de o site entrar em operação comercial, ambas as fontes precisam ser licenciadas. É necessário apenas um peso por fonte.

---

### Hackney (FS Hackney Pro Regular)

**Where to buy / Onde comprar:** [myfonts.com](https://www.myfonts.com) — search "FS Hackney Pro"

**License type / Tipo de licença:** Web Font

**Pricing / Preço** (annual / anual):
| Monthly pageviews / Pageviews mensais | Price / Preço |
|---------------------------------------|---------------|
| Up to 10,000                          | ~$80/year     |
| Up to 25,000                          | ~$200/year    |
| Up to 100,000                         | ~$400/year    |

**Steps / Passos:**
1. Go to myfonts.com / Acesse myfonts.com
2. Search "FS Hackney Pro" / Pesquise "FS Hackney Pro"
3. Select Regular weight only / Selecione apenas o peso Regular
4. Choose Web Font license / Escolha a licença Web Font
5. Select your pageview tier / Selecione o nível de pageviews
6. Complete checkout / Finalize a compra
7. Download the licensed font file / Baixe o arquivo licenciado
8. Replace `HackneyPersonalUseOnly.ttf` in the project folder / Substitua o arquivo `HackneyPersonalUseOnly.ttf` na pasta do projeto
9. If the new filename is different, update the `src:` path in `styles.css` line 3 / Se o nome do arquivo for diferente, atualize o caminho `src:` em `styles.css` linha 3

---

### Berthold Akzidenz Grotesk Extended (Regular)

**Where to buy / Onde comprar:** [bertholdtypes.com](https://www.bertholdtypes.com) — find Akzidenz Grotesk → Extended

**License type / Tipo de licença:** Web Font

**Pricing / Preço** (annual / anual):
| Monthly pageviews / Pageviews mensais | Price / Preço |
|---------------------------------------|---------------|
| Up to 10,000                          | ~$80/year     |
| Up to 25,000                          | ~$200/year    |
| Up to 100,000                         | ~$400/year    |

**Steps / Passos:**
1. Go to bertholdtypes.com / Acesse bertholdtypes.com
2. Find Akzidenz Grotesk → Extended / Encontre Akzidenz Grotesk → Extended
3. Select Regular weight only / Selecione apenas o peso Regular
4. Choose Web Font license / Escolha a licença Web Font
5. Select your pageview tier / Selecione o nível de pageviews
6. Complete checkout / Finalize a compra
7. Download the licensed font file / Baixe o arquivo licenciado
8. Replace the `.otf` file inside the `Berthold Akzidenz Grotesk Extended/` folder / Substitua o arquivo `.otf` dentro da pasta `Berthold Akzidenz Grotesk Extended/`
9. If the new filename is different, update the `src:` path in `styles.css` line 9 / Se o nome do arquivo for diferente, atualize o caminho `src:` em `styles.css` linha 9

---

## 6. Hosting & Deployment / Hospedagem e Publicação

### Option A — Stay on Vercel / Manter no Vercel

**EN:** The site is currently deployed on Vercel. To transfer ownership to your account:

1. Create a Vercel account at [vercel.com](https://vercel.com) (free)
2. Ask the developer to transfer the project to your account from the Vercel dashboard
3. To redeploy after making changes: install Node.js, then run in the project folder:
```
npx vercel --prod
```

**PT:** O site está atualmente publicado no Vercel. Para transferir a titularidade para sua conta:

1. Crie uma conta no Vercel em [vercel.com](https://vercel.com) (gratuito)
2. Peça ao desenvolvedor para transferir o projeto para sua conta pelo painel do Vercel
3. Para republicar após alterações: instale o Node.js e execute na pasta do projeto:
```
npx vercel --prod
```

**Vercel pricing / Preço Vercel:**
- Hobby (free): sufficient for this site / suficiente para este site
- Pro: $20/month — only needed if you require team access or advanced features

---

### Option B — Self-hosted / Hospedagem própria

**EN:** The site is entirely static — just HTML, CSS, JS and image files. It can be hosted on any web server or hosting provider (e.g. GoDaddy, Hostgator, AWS S3, Netlify, GitHub Pages).

Steps:
1. Upload all files in the project folder to your hosting provider's public folder (usually called `public_html` or `www`)
2. Make sure the folder structure is preserved (especially the `Berthold Akzidenz Grotesk Extended/` subfolder)
3. Point your domain to the hosting provider
4. The site will be live at your domain

**PT:** O site é totalmente estático — apenas arquivos HTML, CSS, JS e imagens. Pode ser hospedado em qualquer servidor web ou provedor de hospedagem (ex.: GoDaddy, Hostgator, AWS S3, Netlify, GitHub Pages).

Passos:
1. Envie todos os arquivos da pasta do projeto para a pasta pública do seu provedor de hospedagem (geralmente chamada `public_html` ou `www`)
2. Certifique-se de que a estrutura de pastas foi mantida (especialmente a subpasta `Berthold Akzidenz Grotesk Extended/`)
3. Aponte seu domínio para o provedor de hospedagem
4. O site estará no ar no seu domínio

---

## 7. Cost Table / Tabela de Custos

*All prices are approximate. Verify current pricing at each provider's website.*
*Todos os preços são aproximados. Verifique os preços atuais no site de cada fornecedor.*

| Item | Cost / Custo | Frequency / Frequência | Link |
|------|-------------|------------------------|------|
| FS Hackney Pro Regular — Web Font | ~$80 | Annual / Anual | myfonts.com |
| Berthold Akzidenz Grotesk Extended Regular — Web Font | ~$80 | Annual / Anual | bertholdtypes.com |
| Vercel Hosting (Hobby) | Free / Grátis | — | vercel.com |
| Vercel Hosting (Pro) | $20 | Monthly / Mensal | vercel.com |
| Formspree (Free tier) | Free / Grátis | — | formspree.io |
| Formspree (Paid) | $10+ | Monthly / Mensal | formspree.io |
| **Minimum total / Total mínimo** | **~$160/year** | Annual / Anual | |

---

## 8. Pending Items / Itens Pendentes

Before the site is fully live, the following still need to be completed:

Antes de o site entrar em operação completa, os seguintes itens precisam ser resolvidos:

- [ ] **"Leia o Regulamento da Câmara" button** — replace `href="#"` with the actual document URL in `index.html`
- [ ] **Contact form (Formspree)** — create Formspree account, send endpoint URL to developer to plug into `script.js`
- [ ] **Font licenses** — purchase FS Hackney Pro Regular and Berthold Akzidenz Grotesk Extended Regular web font licenses, replace font files in project folder
- [ ] **Vercel transfer** — transfer Vercel project ownership to client account (if staying on Vercel)

---

*Document prepared by the development team. For questions, contact the developer before making changes to the codebase.*

*Documento preparado pela equipe de desenvolvimento. Para dúvidas, entre em contato com o desenvolvedor antes de realizar alterações no código.*
