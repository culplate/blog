# Biedrapp Monorepo

This is a **monorepo** containing both the frontend and backend code for the Biedrapp project.

## Repository Structure

<pre>biedrapp/ 
   ├── frontend/ Next.js 15 (App Router) client application 
   └── backend/ NestJS 11 REST API </pre>

- [Frontend README](./frontend/README.md)
- [Backend README](./backend/README.md)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/culplate/biedrapp.git
cd biedrapp
```

### 2. Install dependencies for both /frontend and /backend

```bash
npm run install:all
```

---

## Development

To start both frontend and backend in development mode simultaneously:

```bash
npm run dev
```

This runs:

- `frontend` using the Next.js dev server ([http://localhost:3000](http://localhost:3000))
- `backend` using NestJS with hot reload ([http://localhost:3001](http://localhost:3001))

To run them separately:

```bash
npm run dev:frontend   # starts only frontend
npm run dev:backend    # starts only backend
```

---

## Build for Production

Build both frontend and backend:

```bash
npm run build
```

This command:

- Builds the frontend for production
- Transpiles the backend TypeScript code to JavaScript

---

## Testing

Run all tests:

```bash
npm run test
```

Run tests individually:

```bash
npm run test:frontend
npm run test:backend    ---> # This runs only the default test suite,
                               which means unit and integration tests located in: src/**/*.spec.ts
```

---

## Environment Configuration

Each app requires its own `.env` file.

Use the provided example templates:

- `frontend/.env.example` → copy to `frontend/.env`
- `backend/.env.example` → copy to `backend/.env`

Fill in the required variables accordingly.

---

## 📝 Commit Message Convention

We follow a structured format for all commits to keep history clean and meaningful.

**Format:**

```
[scope]/[type]: [message]
```

**Example:**

```
repo/chore: add root install scripts
```

---

### 🔍 Available Scopes

| Scope   | Description                                                        |
| ------- | ------------------------------------------------------------------ |
| `repo`  | Changes that affect the entire monorepo or shared tooling/scripts  |
| `front` | Changes related to the frontend (Next.js)                          |
| `back`  | Changes related to the backend (NestJS)                            |
| `ci`    | Continuous integration (GitHub Actions, pipelines, etc.)           |
| `infra` | Infrastructure changes (Docker, deployment configs, hosting, etc.) |
| `docs`  | Documentation only (README updates, contribution guides, etc.)     |
| `test`  | Adding or refactoring unit/integration tests                       |
| `dev`   | Developer tooling or local dev environment setup                   |

---

### ✅ More Examples

```
front/feat: implement recipe slot machine logic
back/fix: handle Redis connection errors
ci/chore: fix GitHub Actions cache config
infra/feat: add production Dockerfile
docs/chore: update commit convention section in README
```

## License

This project is proprietary and not open-source. All rights reserved.

See [LICENSE.md](./LICENSE.md) for more details.
