<img alt="Vangware's Predicates" src="./logo.svg" height="128" />

![Build Status][build-status-badge] ![Coverage][coverage-badge]
![License][license-badge] ![NPM Version][npm-version-badge]
![Open Issues][open-issues-badge]

🧐 Predicate util functions

## Usage

This package can be installed as a dependency or used directly.

### Usage as ECMAScript module

🦕 In JS or [deno][deno]:

```js
import { isBoolean } from "https://esm.sh/@vangware/predicates";

isBoolean(true); // true
isBoolean(false); // true
isBoolean(undefined); // false
```

🌎 Or in the browser:

```html
<script type="module">
	import { isBoolean } from "https://esm.sh/@vangware/predicates";

	isBoolean(true); // true
	isBoolean(false); // true
	isBoolean(undefined); // false
</script>
```

### Usage with local installation

First:

```bash
# If you use npm
npm install @vangware/predicates
# If you use pnpm
pnpm add @vangware/predicates
# If you use yarn
yarn add @vangware/predicates
```

And then:

```js
import { isBoolean } from "@vangware/predicates";

isBoolean(true); // true
isBoolean(false); // true
isBoolean(undefined); // false
```

## Documentation

Documentation is available [HERE][documentation]. It is auto-generated with
[typedoc][typedoc] based on the JSDocs and the types in the source. It shouldn't
be necessary to read this. Code editors like [VS Code][vscode] integrate the
documentation in the UI.

## Changelog

Changelog can be found [HERE][changelog].

## Test coverage

Test coverage can be found [HERE][coverage].

<!-- Reference -->

[build-status-badge]:
	https://img.shields.io/github/workflow/status/vangware/predicates/Test%20&%20Coverage.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/predicates/actions
[changelog]: https://github.com/vangware/predicates/blob/main/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/predicates.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://coveralls.io/github/vangware/predicates
[coverage]: https://coveralls.io/github/vangware/predicates
[deno]: https://deno.land/
[documentation]: https://predicates.vangware.com
[license-badge]:
	https://img.shields.io/npm/l/@vangware/predicates.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/predicates/blob/main/LICENSE
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/predicates.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://npm.im/@vangware/predicates
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/predicates.svg?style=for-the-badge&labelColor=666&color=0a8&link=https://github.com/vangware/predicates/issues
[typedoc]: https://typedoc.org/
[vscode]: https://code.visualstudio.com/
