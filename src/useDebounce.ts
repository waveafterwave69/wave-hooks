import { onUnmounted } from 'vue'

interface UseDebounce {
    debounceFunc: () => void
}

export const useDebounce = (
    func: () => void,
    debounceDelay: number,
): UseDebounce => {
    let timeout: ReturnType<typeof setTimeout> | null = null

    const debounceFunc = () => {
        if (timeout) clearTimeout(timeout)

        timeout = setTimeout(() => {
            func()
        }, debounceDelay)
    }

    onUnmounted(() => {
        if (timeout) clearTimeout(timeout)
    })

    return { debounceFunc }
}
