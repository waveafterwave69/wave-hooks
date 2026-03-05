import { onMounted, onUnmounted, ref, type Ref } from 'vue'

interface UseCurrentTimeUpdate {
    day: Ref<number | undefined>
    hours: Ref<string | undefined>
    minutes: Ref<string | undefined>
    weekDay: Ref<string | undefined>
    monthName: Ref<string | undefined>
    monthNumber: Ref<number | undefined>
}

export const useCurrentTimeUpdate = (
    months: string[],
    weekDays: string[],
): UseCurrentTimeUpdate => {
    const day = ref<number>()
    const hours = ref<string>()
    const minutes = ref<string>()
    const weekDay = ref<string>()
    const monthName = ref<string>()
    const monthNumber = ref<number>()

    let timeoutId: ReturnType<typeof setTimeout> | null = null
    let intervalId: ReturnType<typeof setInterval> | null = null

    const formatTime = (value: number): string =>
        value.toString().padStart(2, '0')

    const updateTime = () => {
        const date = new Date()
        hours.value = formatTime(date.getHours())
        minutes.value = formatTime(date.getMinutes())
        day.value = date.getDate()
        weekDay.value = weekDays[date.getDay()]
        monthName.value = months[date.getMonth()]
        monthNumber.value = date.getMonth() + 1
    }

    const startTimer = () => {
        updateTime()

        const now = new Date()

        const msUntilNextMinute =
            (60 - now.getSeconds()) * 1000 - now.getMilliseconds()

        timeoutId = setTimeout(() => {
            updateTime()
            intervalId = setInterval(updateTime, 60000)
        }, msUntilNextMinute)
    }

    onMounted(() => {
        startTimer()
    })

    onUnmounted(() => {
        if (timeoutId) clearTimeout(timeoutId)
        if (intervalId) clearInterval(intervalId)
    })

    return {
        day,
        hours,
        minutes,
        monthName,
        weekDay,
        monthNumber,
    }
}
