# Blog — Câmara de Mediação Racial nas Relações de Consumo

Site estático (HTML/CSS/JS puro), sem framework e sem etapa de build. Identidade visual da Câmara: **azul-marinho + dourado** (adaptada do livreto da Certificação Zumbi DEI&P).

## Estrutura

```
blog-camara/
├── index.html                      # Página inicial (masthead + Publicações + Na Imprensa)
├── styles.css                      # Estilos + FONTES licenciadas embutidas (Hackney + Akzidenz)
├── script.js                       # Barra de progresso, nav e animações
├── README.md
└── publicacoes/
    └── modelo-publicacao.html      # Modelo de página de artigo
```

> **Tudo embutido:** as fotos das matérias estão dentro do `index.html` e as fontes licenciadas estão dentro do `styles.css` (em woff2). Por isso **não há pasta `images/` nem `fonts/`** — é só manter esses arquivos juntos. O logo do topo/rodapé é carregado do site da Câmara pela internet.

## Paleta (já aplicada)

- Marinho `#1A2A3E` — fundos escuros (masthead, seção de imprensa, rodapé).
- Dourado `#BD9854` — acento principal (números, destaques, títulos coloridos, badges).
- Creme `#F5EFE4` — texto sobre fundo escuro.
- Azul-aço `#4A6279` — acento secundário (ritmo alternado nos cards).
- Bege-azulado `#EAEDF4` — fundo claro; Bege médio `#CED5E0` — bordas/divisórias.
- Texto `#1C2A3A` (corpo) e `#7A8797` (auxiliar).

## Ver ao vivo (VS Code)

Extensão **Live Server** → botão **"Go Live"** no `index.html`.

## Duas seções separadas

- **#publicacoes** — artigos e reflexões (inclui artigos de opinião na imprensa).
- **#imprensa** — matérias da imprensa (links externos, com foto), em seção escura.

## Como adicionar conteúdo

- **Publicação interna:** duplique `publicacoes/modelo-publicacao.html`, edite, e copie um bloco `<article class="pub-card">` na seção Publicações.
- **Artigo externo (com logo da fonte):** copie um bloco `<article class="src-card">`, troque o logo (img embutida ou em `images/`), o veículo, o título, a data, o resumo e o link.
- **Matéria na imprensa:** copie um bloco `<article class="clip-card">`, troque a foto, o veículo, o título, a data, o resumo e o link. Ajuste `style="object-position:center 22%;"` na imagem para não cortar rostos.

## Publicar na Vercel

Mesmo fluxo do site da Câmara: suba a pasta para o repositório/projeto na Vercel e linke o botão "Blog" do site da Câmara para esta URL.
