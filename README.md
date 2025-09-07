> [!IMPORTANT]
>
> **This library is deprecated.** Go to [coven.engineering](https://coven.engineering) to see what we are doing nowadays.

---

<img alt="Predicates by Vangware" src="./logo.svg" height="128" />

![Coverage][coverage-badge] ![License][license-badge]
![NPM Version][npm-version-badge] ![Open Issues][open-issues-badge]

🧐 Predicate util functions

## Usage

### 📦 Node

Install `@vangware/predicates` as a dependency:

```bash
pnpm add @vangware/predicates
# or
npm install @vangware/predicates
# or
yarn add @vangware/predicates
```

Import it and use it:

```typescript
import { isBoolean } from "@vangware/predicates";

isBoolean(true); // true
isBoolean(false); // true
isBoolean(undefined); // false
```

### 🦕 Deno

Import `@vangware/predicates` using the `npm:` prefix, and use it directly:

```typescript
import { isBoolean } from "npm:@vangware/predicates";

isBoolean(true); // true
isBoolean(false); // true
isBoolean(undefined); // false
```

### 🌎 Browser

Import `@vangware/predicates` using [esm.sh][esm.sh], and use it directly:

```html
<script type="module">
	import { isBoolean } from "https://esm.sh/@vangware/predicates";

	isBoolean(true); // true
	isBoolean(false); // true
	isBoolean(undefined); // false
</script>
```

## Useful links

-   📝 [Documentation][documentation]: TypeDoc generated documentation.
-   ⏳ [Changelog][changelog]: List of changes between versions.
-   ✅ [Tests Coverage][coverage]: Coveralls page with tests coverage.

<!-- Reference -->

[changelog]: https://github.com/vangware/predicates/blob/main/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/predicates.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://coveralls.io/github/vangware/predicates
[coverage]: https://coveralls.io/github/vangware/predicates
[documentation]: https://predicates.vangware.com
[esm.sh]: https://esm.sh
[license-badge]:
	https://img.shields.io/npm/l/@vangware/predicates.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/predicates/blob/main/LICENSE
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/predicates.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://npm.im/@vangware/predicates
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/predicates.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/predicates/issues
