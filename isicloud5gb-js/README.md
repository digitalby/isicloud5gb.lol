# isicloud5gb.lol

**Is iCloud's free tier still 5GB?**

Yes.

## Install

```sh
npm install isicloud5gb.lol
```

## Usage

```js
import { isIcloud5gb } from 'isicloud5gb.lol';

console.log(isIcloud5gb()); // true
```

CommonJS:

```js
const { isIcloud5gb } = require('isicloud5gb.lol');

console.log(isIcloud5gb()); // true
```

## API

### `isIcloud5gb() → true`

Returns whether iCloud's free tier is still 5GB.

It's `true`. It's always `true`. Apple, a $3+ trillion company, has offered
the same 5GB of free iCloud storage since 2011. Google gives you 15GB.

Incredible.

## FAQ

**Is it still 5GB?**
Yes.

**What about now?**
Still 5GB.

**Has it changed since the last time I checked?**
No. It's 5GB.

**Should I add error handling in case this returns `false` someday?**
No. Go outside instead.

**Will this package ever return `false`?**
If it does, open a PR. We'll deprecate the package and shut the whole site down.

## License

MIT — because unlike iCloud storage, this is actually *free*.
