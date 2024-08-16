export function getDate(dt, type) {
    const date = new Date(dt * 1000)
    return type == 'week' ? date.toLocaleDateString('ru-RU', {
        weekday: "short"
    }) : type == 'day' ? date.toLocaleDateString('ru-RU', {
        day: "numeric"
    }) : type == 'month' ? date.toLocaleDateString('ru-RU', {
        month: "short"
    }) : ''
}