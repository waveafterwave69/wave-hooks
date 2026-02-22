import { ref, type Ref } from 'vue'

interface UseCounter {
    count: Ref<number>
    increment: () => void
    decrement: () => void
}

export const useCounter = (initialValue: number = 0): UseCounter => {
    const count = ref<number>(initialValue)
    const increment = () => count.value++
    const decrement = () => count.value--

    return { count, increment, decrement }
}
