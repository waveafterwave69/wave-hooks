import { onMounted, onUnmounted, ref, type Ref } from 'vue'

interface UseScroll {
    scrollValue: Ref<number | undefined>
}

export const useScroll = (): UseScroll => {
    const scrollValue = ref<number>()

    const onScroll = () => {
        scrollValue.value = window.scrollY
    }

    onMounted(() => {
        window.addEventListener('scroll', onScroll)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', onScroll)
    })

    return { scrollValue }
}
