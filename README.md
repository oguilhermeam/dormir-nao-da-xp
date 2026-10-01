# 🏆 Dormir Não Dá XP — Site Oficial da Guilda (PokeAlliance)

Site oficial e biblioteca de guias da guilda **Dormir Não Dá XP** no PokeAlliance (PokéTibia).

Criado com foco em:
- **Design Minimalista & Elegante:** Dark mode nativo com paleta sóbria, sem neons estridentes ou layouts genéricos de IA.
- **Performance Máxima:** Sem frameworks pesados desnecessários — carrega instantaneamente no PC ou celular.
- **Foco em Conteúdo & Prática:** Busca rápida em tempo real (atalho `/` ou `Ctrl+K`), filtros por categoria, sumários laterais para leitura fluida e tabelas de drops/hunts.

---

## 📁 Estrutura de Arquivos

```text
dormir-nao-da-xp/
├── index.html           # Página inicial: destaques, visão geral e atalhos rápidos
├── guias.html           # Catálogo de guias com busca instantânea e filtros por tag
├── guia-template.html   # Modelo de página para novos guias (com TOC e callouts)
├── sobre.html           # Sobre a guilda, princípios, regras e recrutamento
├── assets/
│   ├── css/
│   │   └── style.css    # Design system sóbrio, variáveis e tipografia
│   ├── js/
│   │   └── main.js      # Busca rápida, filtro em tempo real e atalhos de teclado
│   └── img/             # Imagens, logos e capturas de tela das hunts
└── README.md            # Documentação do projeto
```

---

## 🚀 Como Visualizar Localmente

### Opção 1: Direto no Navegador
Basta dar dois cliques no arquivo `index.html` ou arrastá-lo para qualquer navegador (Chrome, Edge, Firefox, Brave).

### Opção 2: Servidor Local Rápido (Python)
Abra o terminal nesta pasta e execute:
```bash
python -m http.server 3000
```
Depois acesse `http://localhost:3000` no seu navegador.

---

## 🌐 Como Publicar na Web (Grátis)
- **GitHub Pages:** Crie um repositório no GitHub, suba os arquivos e ative o GitHub Pages nas configurações.
- **Vercel / Cloudflare Pages / Netlify:** Arraste a pasta e o site fica no ar em segundos com link personalizado e HTTPS.
