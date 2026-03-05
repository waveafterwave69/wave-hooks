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

1. useCounter - a simple counter with increment and decrement phenomena.

```bash
<script setup lang="ts">
import { useCounter } from 'wave-hooks'

const { count, increment, decrement } = useCounter(10)
</script>

<template>
  <p>Count is: {{ count }}</p>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>
```

Parameters:

- initialValue(Initial value of the counter) - Type: number, Default: 0

---

2. useScroll - tracks the current window scroll position (window.scrollY). Automatically clears event listeners when the component is destroyed.

```bash
<script setup lang="ts">
import { useScroll } from 'wave-hooks'

const { scrollValue } = useScroll()
</script>

<template>
  <p>scroll position: {{ scrollValue }}px</p>
</template>
```

---

3. useDebounce - creates a debounced version of a function. Useful for optimizing input or search handlers. Automatically resets the timer on unmount.

```bash
<script setup lang="ts">
import { useDebounce } from 'wave-hooks'

const sayHello = () => {
  console.log('hello world')
}

const { debounceFunc } = useDebounce(sayHello, 500)
</script>

<template>
  <input @input="debounceFunc" placeholder="say hello by pressing the keyboard" />
</template>
```

Parameters:

- func(A function that needs to be executed with a delay) - Type: () => void
- debounceDelay(Delay time in milliseconds) - Type: number

---

4. useClickOutside - detects clicks outside of a specific element. Useful for closing modals, dropdowns, or sidebars.

```bash
<script setup lang="ts">
import { ref } from 'vue'
import { useClickOutside } from 'wave-hooks'

const menuRef = ref<HTMLElement | null>(null)
const isOpen = ref(true)

const closeMenu = () => {
  isOpen.value = false
}

useClickOutside(menuRef, closeMenu)
</script>

<template>
  <div v-if="isOpen" ref="menuRef" class="menu">
    <p>Click outside this box to close it!</p>
  </div>
</template>
```

Parameters:

- el (The target element to monitor) — Type: MaybeRef<HTMLElement | null>
- func (Function to execute when a click occurs outside) — Type: () => void

---

4. useClickOutside - detects clicks outside of a specific element. Useful for closing modals, dropdowns, or sidebars.

```bash
<script setup lang="ts">
import { useCurrentTimeUpdate } from 'wave-hooks'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const {
  hours,
  minutes,
  day,
  monthName,
  monthNumber,
  weekDay
} = useCurrentTimeUpdate(months, weekDays)
</script>

<template>
  <div>
    <h1>Current Time: {{ hours }}:{{ minutes }}</h1>
    <p>Today is {{ weekDay }}, {{ monthName }} {{ day }} (Month №{{ monthNumber }})</p>
  </div>
</template>
```

Parameters:

- months (An array of month names) — Type: string[]
- weekDays (An array of weekday names, starting from Sunday) — Type: string[]

Returned Values:

- hours — Current hour with a leading zero (string).
- minutes — Current minute with a leading zero (string).
- day — Current day of the month (number).
- monthName — Month name from the provided array (string).
- monthNumber — Calendar month number from 1 to 12 (number).
- weekDay — Weekday name from the provided array (string).
