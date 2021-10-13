import store from '../store/index'

export default <T extends keyof typeof store.state>(
    name: T,
    value: typeof store.state[T],
    unit: string,
): void => {
    store.state[name] = value
    document.body.style.setProperty(`--${name}`, value + unit)
}
