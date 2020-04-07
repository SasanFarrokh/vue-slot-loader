<slot>
   <span>override default</span>
</slot>

<slot name="namedSlot">
   <span>override namedSlot: {{ test }}</span>
</slot>

<slot
  name="conditionalOverride"
  v-if="this.shouldOverride"><span>conditionalOverride: override</span></slot>

<script>
const example = require("./BaseComponent.vue").default;

module.exports = {
  extends: example,

  data() {
    return {
      shouldOverride: false
    };
  }
};
</script>
