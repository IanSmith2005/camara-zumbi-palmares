# Blog — Câmara de Mediação Racial nas Relações de Consumo

Site estático (HTML/CSS/JS puro), sem framework e sem etapa de build — no mesmo padrão do site da Câmara. É só abrir no VS Code, visualizar ao vivo e publicar na Vercel.

## Estrutura dos arquivos

```
blog-camara/
├── index.html                      # Página inicial (seções Publicações e Na Imprensa)
├── styles.css                      # Estilos (reaproveita a identidade da Câmara)
├── script.js                       # Nav e animação de entrada
├── publicacoes/
│   └── modelo-publicacao.html      # Modelo de página de artigo (com exemplo)
├── fonts/                          # Fontes da marca (Hackney + Akzidenz)
└── images/                         # Logo, fundo do hero e fotos das matérias
```

## Ver ao vivo (VS Code)

Use a extensão **Live Server** (botão "Go Live") e abra o `index.html`, como você já fez no site da Câmara.

## Duas seções separadas

O blog tem duas seções independentes, sem opção de "ver tudo junto":
- **#publicacoes** — artigos acadêmicos/didáticos da Zumbi e da Faleck.
- **#imprensa** — matérias da imprensa (links externos, com foto).

## Como publicar uma PUBLICAÇÃO (artigo da Zumbi/Faleck)

1. Dentro de `publicacoes/`, **duplique** `modelo-publicacao.html` e renomeie (ex.: `letramento-racial.html`).
2. Edite no novo arquivo: o `<title>`, o cabeçalho (`.artigo-header`) e o corpo (`.artigo-body`).
3. No `index.html`, na seção **Publicações**, **copie um bloco** `<article class="card">`, cole na grade e atualize título, data, resumo e o `href` apontando para a sua nova página.

## Como publicar uma MATÉRIA na imprensa (com foto)

1. Coloque a foto da matéria em `images/` (ex.: `images/minha_foto.jpg`).
2. No `index.html`, na seção **Na Imprensa**, copie um bloco `<article class="card">`, cole na grade e atualize:
   - a foto: `<img src="images/minha_foto.jpg" ...>`
   - o veículo (`.cover-veiculo-pill` e `.post-source`)
   - o título, a data, o resumo e o `href` (o link da matéria). Mantenha `target="_blank"`.

## Logos e fundo

O cabeçalho/rodapé e o fundo do hero usam as imagens já hospedadas em `camarazumbi.com.br`, então o blog abre completo na hora. Se preferir usar as cópias locais (em `images/`), troque os endereços `https://camarazumbi.com.br/images/...` pelos caminhos locais.

## Fontes

As fontes da marca estão em `fonts/` (uso pessoal/prévia, iguais às do site). Antes de entrar no ar comercialmente, licencie-as — como descrito no HANDOFF do site da Câmara. Sem elas, o blog usa **Barlow** como fallback.

## Publicar na Vercel

Mesmo fluxo do site da Câmara: suba a pasta para o repositório / projeto na Vercel. Depois, é só linkar o botão **"Blog"** do site da Câmara para a URL deste blog.
