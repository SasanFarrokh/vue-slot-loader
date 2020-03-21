<slot name="namedSlot">
   <span>{{ test }}</span>
</slot>

<script>
import example from './example.vue'

export default {
    extends: example,

    mounted () {
        window.app = this
    }
}
</script>