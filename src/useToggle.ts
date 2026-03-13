import { ref, type Ref } from 'vue'

type UseToggleReturn = [Ref<boolean>, (value?: boolean) => void]

export const useToggle = (initialValue: boolean = false): UseToggleReturn => {
    const status = ref(initialValue)

    const toggle = (value?: boolean) => {
        status.value = typeof value === 'boolean' ? value : !status.value
    }

    return [status, toggle]
}
