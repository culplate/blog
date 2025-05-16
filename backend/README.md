# Backend

This is the backend service of the BiedraApp project, built with [NestJS](https://nestjs.com/) and TypeScript. It is part of a monorepo setup.

## Core Technologies

- **[NestJS 11](https://docs.nestjs.com/)** with **TypeScript**
- **ESLint**
- **Prettier** for code formatting
- **Jest** for unit and end-to-end testing
- **Husky** with pre-commit hook
- **lint-staged** to run linters only on staged files

## Git Hooks

- `pre-commit` — runs `eslint --fix` and `prettier --write` on staged files

## Available Scripts (`package.json`)

- `start` — run the app in standard mode
- `start:dev` — run the app in development (watch) mode
- `start:debug` — run the app with debugging
- `start:prod` — run the built app
- `build` — build the project using Nest CLI
- `format` — format `src/` and `test/` with Prettier
- `lint` — run ESLint with fix on `src`, `apps`, `libs`, and `test`
- `test` — run unit tests
- `test:watch` — run unit tests in watch mode
- `test:cov` — run unit tests with coverage
- `test:debug` — run unit tests in debug mode
- `test:e2e` — run end-to-end tests
- `prepare` — initialize Husky

## Configuration Files

- `.prettierrc` — Prettier configuration
- `eslint.config.mjs` — ESLint Flat Config
- `.husky/` — directory with Git hooks managed by Husky
- `lint-staged` — defined in `package.json`
- `.env.example` — environment variable template

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
    npm run dev
   ```

   Open [http://localhost:8080](http://localhost:8080) with your browser. (default PORT is 8080, may be changed)

3. To build the project:
   ```bash
   npm run build
   ```

## Linting & Formatting

- Code is automatically linted and formatted on commit using **Husky** and **lint-staged**.
- To manually format the project:

  ```bash
  npm run format
  ```

- To manually run the linter:

  ```bash
  npm run lint
  ```

## Testing

- To run all tests:

  ```bash
  npm run test
  ```

- To run tests with coverage:

  ```bash
  npm run test:cov
  ```

- To run end-to-end tests:

  ```bash
  npm run test:e2e
  ```

- To run tests in watch mode:

  ```bash
  npm run test:watch
  ```
