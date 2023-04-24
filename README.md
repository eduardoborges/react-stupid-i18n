# react-stupid-i18n

[![NPM](https://img.shields.io/npm/v/react-stupid-i18n.svg)](https://www.npmjs.com/package/react-stupid-i18n) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-airbnb-brightgreen.svg)](https://standardjs.com) [![Bundle Size](https://badgen.net/bundlephobia/minzip/react-stupid-i18n)](https://bundlephobia.com/result?p=react-stupid-i18n)



- 🤘 100% type-safe, infering all locales keys.
- 🏆 Better Developer Experience (DX);
- 🤩 Powered by Preact Signals;
- 🗜 Small bundle;

---

- [react-stupid-i18n](#react-stupid-i18n)
  - [Install](#install)
  - [Setup](#setup)
  - [Using JSON locale files](#using-json-locale-files)

## Install

```bash
npm i react-stupid-i18n
```

## Setup

```typescript
import { createInstance } from 'react-stupid-i18n';

// must have same structure
import en_US from './locales/en_US';
import pt_BR from './locales/pt_BR';

export const {
  t, setLanguage, language, avaliableLanguages,
} = createInstance({
  en_US,
  pt_BR,
}, 'en_US');
```

In your app:

```typescript
import React from 'react';
import { t } from './i18n';

function App() {
  return (
    <div className="App">
      {t('greetings.evening', { user: 'Eduardo' })}
    </div>
  );
}
```

## Using JSON locale files

You can use JSON files and be 100% type-safe;

```typescript
// must have same structure
import en_US from './locales/en_US.json';
import pt_BR from './locales/pt_BR.json';
```

You just need to enable `resolveJsonModule` in your tsconfig.json file:


```json
{
  ...
  "compilerOptions": {
    "resolveJsonModule": true,
  },
  ...
}
```
