### Demo deployment (Vercel)

This demo is a static site under `apps/demo/public`.

It depends on the built browser bundle from `packages/react-quill-new` and copies assets into `public/assets` during `pnpm build`.

Recommended Vercel project settings:

- **Root Directory**: `apps/demo`
- **Install Command**: `pnpm install --frozen-lockfile`
- **Build Command**: `pnpm -w build`
- **Output Directory**: `public`


