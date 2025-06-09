## Core Technologies

- **[Next.js 15](https://nextjs.org)** with **TypeScript**
- **SCSS Modules** (`.module.scss`)
- **ESLint**
- **Prettier** for code formatting
- **Husky** with pre-commit hook
- **lint-staged** to run linters only on staged files

## Git Hooks

- `pre-commit` — runs `eslint --fix` and `prettier --write` on staged files

## Available Scripts (`package.json`)

- `dev` — run Next.js in development mode
- `build` — build the project for production
- `start` — start the production server
- `lint` — run ESLint on the project
- `format` — format all files using Prettier
- `prepare` — initialize Husky

## Configuration Files

- `.prettierrc.json` — Prettier configuration
- `eslint.config.mjs` — ESLint configuration
- `.husky/` — directory with Git hooks managed by Husky
- `lint-staged` — defined in `package.json`

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
    npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser.

3. To build the project:

   ```bash
   npm run build
   ```

4. To test the project:

   ```bash
   npm run test
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
