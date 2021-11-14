import store from '@/store/index'

/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable  @typescript-eslint/explicit-module-boundary-types */
export default (...message: any[]): void => {
    if (store.state.enableLogs) {
        console.log(...message)
    }
}
