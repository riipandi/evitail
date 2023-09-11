# Evitail

TODO: Fix Vitest setup

## Quick Start

1. Install dependencies using yarn: `yarn install`
2. Run development with command: `yarn dev`
3. Build application package: `yarn build`

### Build for specific platform

```bash
yarn build:win       # For windows
yarn build:mac       # For macOS
yarn build:linux     # For Linux
```

## Notice

### Why not using pnpm?

Error causing by peer dependenies like this:

```
An unhandled rejection has occurred inside Forge: .....
Error: Failed to locate module ....
```
