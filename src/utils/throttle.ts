/**
 * 节流函数，在指定的时间间隔内，只执行一次传入的函数。
 * @param func 要节流的函数
 * @param delay 节流的时间间隔（毫秒）
 * @returns 节流后的函数
 */
export function throttle<T extends (...args: any[]) => any>(func: T, delay = 200) {
  let lastTime = 0
  let timer: NodeJS.Timeout | null = null

  return function (this: any, ...args: any[]) {
    const now = Date.now()
    const remaining = delay - (now - lastTime)

    if (remaining <= 0) {
      if (timer) {
        clearTimeout(timer)
        timer = null
      }
      func.apply(this, args)
      lastTime = now
    } else if (!timer) {
      timer = setTimeout(() => {
        func.apply(this, args)
        lastTime = Date.now()
        timer = null
      }, remaining)
    }
  }
}
