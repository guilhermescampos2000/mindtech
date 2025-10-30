# MindTech

Repositório monorepo para o projeto MindTech — contém frontend, backend e scripts/infra do banco de dados. Abaixo está a árvore do projeto e explicações detalhadas de cada parte, como configurar, executar e boas práticas.

## Estrutura (árvore)

mindtech/
├── frontend/
│   ├── package.json
│   ├── src/
│   │   ├── index.(js|tsx)
│   │   ├── App.(js|tsx)
│   │   └── components/
│   ├── public/
│   └── .env.example
├── backend/
│   ├── package.json (ou pyproject.toml/requirements.txt)
│   ├── src/
│   │   ├── server.(js|py)
│   │   ├── routes/
│   │   └── controllers/
│   └── .env.example
├── db/
│   ├── migrations/
│   ├── seeds/
│   └── docker-compose.yml (opcional)
├── .gitignore
├── README.md
└── LICENSE

---

## Explicação detalhada por pasta/ficheiro

- frontend/
  - package.json: scripts (start, build, test, lint) e dependências do cliente.
  - src/: código-fonte da aplicação cliente (React/Vue/Angular).
    - index.(js|tsx): ponto de entrada que monta a app.
    - App.(js|tsx): componente raiz.
    - components/: componentes reutilizáveis.
  - public/: ativos estáticos (index.html, favicons).
  - .env.example: variáveis de ambiente que a app cliente usa (ex.: REACT_APP_API_URL).

- backend/
  - package.json / requirements.txt: dependências e scripts do servidor.
  - src/server.(js|py): inicialização do servidor (Express, FastAPI, Flask).
  - routes/: definição de rotas/endpoints.
  - controllers/: lógica de negócio separada das rotas.
  - .env.example: variáveis sensíveis (DATABASE_URL, JWT_SECRET, PORT).

- db/
  - migrations/: scripts de migração do esquema (Flyway, Knex, Alembic).
  - seeds/: dados iniciais para desenvolvimento/testes.
  - docker-compose.yml: definição de serviço de banco (Postgres, Redis) para desenvolvimento.

- .gitignore
  - Deve incluir node_modules, .env, build/dist, .venv, e arquivos sensíveis.

- LICENSE
  - Escolha e adicione (MIT, Apache-2.0, etc).

---

## Variáveis de ambiente (exemplos)

- BACKEND_URL=http://localhost:4000
- DATABASE_URL=postgres://user:pass@localhost:5432/mindtech
- JWT_SECRET=uma_chave_secreta
- NODE_ENV=development

Coloque valores de exemplo em .env.example e NÃO comite .env real.

---

## Setup local (passo a passo)

1. Clonar repositório
   - cd /home/guilherme002/Documentos
   - git clone <URL_DO_REPO> mindtech
   - cd mindtech

2. Banco de dados (opção Docker)
   - cd db
   - docker compose up -d
   - executar migrations: (exemplo)
     - npx knex migrate:latest
     - ou alembic upgrade head

3. Backend
   - cd ../backend
   - Node:
     - npm install
     - cp .env.example .env (editar valores)
     - npm run dev
   - Python:
     - python -m venv .venv
     - source .venv/bin/activate
     - pip install -r requirements.txt
     - cp .env.example .env
     - flask run

4. Frontend
   - cd ../frontend
   - npm install
   - cp .env.example .env (apontar BACKEND_URL)
   - npm run dev

---

## Scripts úteis (convencionais)

- frontend:
  - npm start / npm run dev — rodar em desenvolvimento
  - npm run build — build para produção
  - npm test — rodar testes unitários
  - npm run lint — checar estilo

- backend:
  - npm run dev / flask run — rodar servidor
  - npm test — rodar testes
  - npm run migrate — rodar migrations

- db:
  - docker compose up -d — subir banco
  - docker compose down — parar serviços

---

## Testes e qualidade

- Escreva testes unitários por módulo (Jest, Mocha, Pytest).
- Integre linters (ESLint, Prettier, Flake8) e formatação automática.
- Execute testes localmente antes de push:
  - git add . && git commit -m "feat: ..."
  - npm test (em cada módulo)

---

## Git / Fluxo de trabalho recomendado

- Branches:
  - main — produção
  - develop — integração
  - feat/xxx — novas features
  - fix/xxx — correções
- Commits:
  - Use mensagens claras, estilo: feat/module: descrição breve
- Pull Request:
  - Abrir PR para develop/main com descrição, checklist e screenshots se necessário.
- Rebase antes de merge quando for necessário:
  - git pull --rebase origin develop

---

## Deploy (sugestões)

- Build do frontend em CI, deploy para Vercel/Netlify ou servir via Nginx.
- Backend: Containerizar com Docker, deploy em ECS/GKE/DigitalOcean ou Heroku.
- Variáveis sensíveis via secrets do provedor (GitHub Secrets, AWS Secrets Manager).

---

## Integração contínua (exemplo rápido)

- GitHub Actions:
  - Workflow que instala dependências, roda lint, tests e build para cada push/PR.
  - Rodar migrations em ambiente de CI antes de testes que dependem do DB.

---

## Segurança e boas práticas

- Nunca comite .env ou credenciais.
- Limitar permissões do banco de dados de desenvolvimento.
- Usar dependabot / atualizar dependências regularmente.
- Revisão de código obrigatória em PRs.

---

## Contribuição

- Abra uma issue antes de começar uma feature grande.
- Crie branch a partir de develop: git checkout -b feat/nome
- Faça PR com descrição e tempo estimado.
- Documente alterações importantes no README e/ou no changelog.

---

## Checklist inicial antes do primeiro commit
- [ ] .gitignore configurado
- [ ] .env.example criado para frontend/backend
- [ ] LICENSE adicionada
- [ ] README.md (este) atualizado
- [ ] Migrations básicas em db/
