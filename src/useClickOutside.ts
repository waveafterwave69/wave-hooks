import { onMounted, onUnmounted, unref, type MaybeRef } from 'vue'

export const useClickOutside = (
    el: MaybeRef<HTMLElement | null | undefined>,
    func: () => void,
) => {
    if (typeof window === 'undefined') return

    const listener = (event: MouseEvent | TouchEvent) => {
        const target = unref(el)
        if (!target || target.contains(event.target as Node)) {
            return
        }
        func()
    }

    onMounted(() => {
        window.addEventListener('mousedown', listener)
        window.addEventListener('touchstart', listener)
    })

    onUnmounted(() => {
        window.removeEventListener('mousedown', listener)
        window.removeEventListener('touchstart', listener)
    })
}
