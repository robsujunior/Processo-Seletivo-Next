# 🎁 Projeto: Site de empresa fictícia (Doce Presentes) para processo seletivo NextStep

O projeto está dividido em duas pastas principais: `frontend` e `backend`.

No `frontend`, temos a interface visual do site. No `backend`, temos um pequeno servidor Node.js que armazena mensagens localmente em um arquivo `mensagens.json`.

---

## 🚀 Como Executar o Projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/robsujunior/Processo-Seletivo-Next.git
```

---

### 2. Backend

Acesse a pasta `backend`:

```bash
cd backend
```

Instale as dependências:

```bash
npm install
```

Rode o servidor:

```bash
node server.js
```

O backend ficará disponível em `http://localhost:3001`.

---

### 3. Frontend

Abra um novo terminal e acesse a pasta `frontend`:

```bash
cd frontend
```

Instale as dependências:

```bash
npm install
```

Rode o projeto:

```bash
npm run dev
```

O projeto será acessado em `http://localhost:5173`. O próprio vite vai fornecer uma interface com o link clicável, basta posicionar o mouse em cima e clicar enquanto segura o CTRL

---

## 🗂️ mensagens.json

O arquivo `mensagens.json`, localizado na pasta `backend`, armazena as mensagens enviadas pelo site. Ele funciona como um pequeno banco de dados local.

---

## 💡 Observações Finais

- O servidor precisa estar rodando para que o frontend consiga enviar e buscar mensagens.


