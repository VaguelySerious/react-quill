# Changelog

## 3.8.3

### Patch Changes

- [`af81b20`](https://github.com/VaguelySerious/react-quill/commit/af81b2054366197722104135380b124f11bb6800) Thanks [@VaguelySerious](https://github.com/VaguelySerious)! - Fix CSS files missing from bundled package

## 3.8.2

### Patch Changes

- [`7aff3d0`](https://github.com/VaguelySerious/react-quill/commit/7aff3d031ac81504926ccc79ef9319b720000fb2) Thanks [@VaguelySerious](https://github.com/VaguelySerious)! - Update Quill dependency from 2.0.2 to 2.0.3

## 3.8.1

### Patch Changes

- [`34866ce`](https://github.com/VaguelySerious/react-quill/commit/34866cef74e379013b90bccbee3b1f935429dbae) Thanks [@VaguelySerious](https://github.com/VaguelySerious)! - Migrate repo to pnpm + turborepo + changesets. Replace webpack bundle build with tsup and begin migrating tests to vitest (playwright browser mode).
  This might affect the compiled version of the bundle.

- [`d905530`](https://github.com/VaguelySerious/react-quill/commit/d905530c1b19339948164673206150adb5435827) Thanks [@VaguelySerious](https://github.com/VaguelySerious)! - Add `useSemanticHTML` prop, which can be set to `false` to restore the <3.7.0 behavior of using editor.root.innerHTML for display instead

## v3.8.0

- Repository migrated to pnpm + turborepo + changesets
- Browser bundle build migrated away from webpack
- Test migration started toward Vitest + Playwright browser mode
