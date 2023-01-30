// 防抖
export const debounce = function(fun, duration) {
    let timer = null;
    return function() {
        const that = this
        clearTimeout(timer);
        const args = arguments
        timer = setTimeout(function() {
            fun.apply(that, args)
        }, duration)
    }
}