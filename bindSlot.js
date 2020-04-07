export default function({ options }, render, name) {
  options._slots = Object.assign(options._slots || {}, {
    [name]: render
  });
  const hook = function() {
    const r = this.$options._slots[name].bind(this, this.$createElement);
    this.$watch(
        r,
        t => {
          this.$slots[name] = t;
          this.$forceUpdate();
        },
        { immediate: true, deep: true }
    )
  };
  options.created = (options.created || []).concat(hook);
  options.activated = (options.activated || []).concat(function () {
    this.$slots[name] = this.$options._slots[name].call(this, this.$createElement);
    this.$forceUpdate();
  });
}
