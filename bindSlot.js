export default function ({ options }, render, name) {
    options._slots = {
        [name]: render
    }
    options.created = [
        function () {
            const r = this.$options._slots[name].bind(this, this.$createElement)
            this.$watch(r, (t) => {
                this.$slots[name] = t
                this.$forceUpdate()
            }, { immediate: true, deep: true })
        }
    ].concat(options.created || [])
}