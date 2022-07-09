<img alt="Vangware's Predicates" src="./logo.svg" height="192" />

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
npm i @vangware/predicates
```

And then:

```js
import { isBoolean } from "@vangware/predicates";

isBoolean(true); // true
isBoolean(false); // true
isBoolean(undefined); // false
```

## Documentation

Documentation can be found [HERE][documentation]. It is auto-generated with
[typedoc][typedoc] based on the JSDocs and the types in the source. Shouldn't be
necessary to read this, code editors like [VSCode][vscode] integrate the
documentation in the UI.

## Changelog

Changelog can be found [HERE][changelog].

## Test coverage

Test coverage can be found [HERE][coverage].

<!-- Reference -->

[build-status-badge]:
	https://img.shields.io/github/workflow/status/vangware/predicates/Test.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/predicates/actions
[changelog]: https://github.com/vangware/predicates/blob/main/CHANGELOG.md
[coverage-badge]:
	https://img.shields.io/coveralls/github/vangware/predicates.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://coveralls.io/github/vangware/predicates
[coverage]: https://coveralls.io/github/vangware/predicates
[documentation]: https://test.vangware.com
[license-badge]:
	https://img.shields.io/npm/l/@vangware/predicates.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/predicates/blob/main/LICENSE
[npm-version-badge]:
	https://img.shields.io/npm/v/@vangware/predicates.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://npm.im/@vangware/predicates
[open-issues-badge]:
	https://img.shields.io/github/issues/vangware/predicates.svg?style=for-the-badge&labelColor=666&color=2b7&link=https://github.com/vangware/predicates/issues
[typedoc]: https://typedoc.org/
[vscode]: https://code.visualstudio.com/
