# slocjs

SLOC: 83

## Quickstart:

```
npm install slocjs
```

#### ESM

import and use like:
```js
import { countLinesInDir } from "slocjs";
const lines = countLinesInDir("./src");
console.log(lines);

// SLOC: 3415
```

or

#### Common

```js
const slocjs = require("slocjs");
const lines = slocjs.countLinesInDir("./src");
console.log(lines);
```

## Tests

Run tests in watch mode:

```bash
npm run test:watch
```

## Npmjs

https://www.npmjs.com/package/slocjs
