## SysGO — Site em Next.js

Aplicação migrada de HTML/CSS estático para Next.js 15 com Tailwind CSS.

## Requisitos
- Node.js 18+ (para desenvolvimento) ou Docker (para produção/containers)

## Rodando em desenvolvimento
```bash
npm install
npm run dev
```
Acesse http://localhost:3000

## Build de produção (local)
```bash
npm run build
npm start
```

## Docker
Build e execução em modo produção (Next standalone):
```bash
# no diretório web/
docker build -t sysgo-web .
docker run --rm -p 3000:3000 sysgo-web
```
Acesse http://localhost:3000

## Estrutura relevante
- `src/app/layout.js` — metadata e layout root
- `src/app/page.js` — Home usando `Navbar` e `Hero`
- `src/components/Navbar.jsx` — navegação
- `src/components/Hero.jsx` — primeira seção (hero) conforme design
- `public/assets/` — imagens, fontes e CSS antigos migrados para public
- `Dockerfile` e `.dockerignore` — build/run em produção

## Notas de UI
- Tipografia e cores base alinhadas ao visual do mock. Ajustes finos podem ser feitos em `globals.css` e classes do Tailwind nos componentes.
                                                                                                                                                                                