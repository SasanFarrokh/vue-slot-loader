<template>
  <div>
    TEST
    <mark>
      <slot></slot>
    </mark>
    <mark>
      <slot name="namedSlot">default</slot>
    </mark>
    <mark>
      <slot name="noOverride">no override</slot>
    </mark>
    <mark>
      <slot name="conditionalOverride">conditionalOverride: none</slot>
    </mark>
  </div>
</template>

<script>
module.exports = {
  data() {
    return {
      test: "Foo Bar"
    };
  }
};
</script>
