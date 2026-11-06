# LedgerGuard frontend

The frontend is a React 19 and TypeScript application bundled with Vite. Its
app shell and global styles provide a small starting point for building
LedgerGuard screens without coupling future features to the entry point.

## Development

From this directory, install dependencies and start the Vite development
server:

```sh
npm install
npm run dev
```

Available checks:

```sh
npm run build
npm run lint
```

## Structure

- `src/App.tsx` composes the initial workspace view.
- `src/components/layout/` contains reusable application layout components.
- `src/index.css` defines global styles and shared color tokens.
- `src/App.css` contains styles specific to the initial workspace view.

Add future screens and shared UI as focused components; keep application
features separate from the layout shell.
