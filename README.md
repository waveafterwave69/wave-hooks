# 🌊 Wave Hooks

A lightweight and powerful collection of Composition API hooks for Vue 3, designed to speed up development and keep your code clean.

## ✨ Features

- ⚡️ Vue 3 Ready: Full support for the Composition API.
- 🟦 TypeScript: Native typing out of the box.
- 🪶 Zero Config: Just import and use.
- 🌳 Tree-shaking: Only what you use gets bundled.

## 👀 How to use?

example:

```bash
<script setup lang="ts">
import { useCounter } from 'wave-hooks';

const { count, increment, decrement } = useCounter(10);
</script>

<template>
  <div>
    <p>сurrent account: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>
```

## 📦 Installation

```bash
npm i wave-hooks
```

## 📄 Documentation

later...
