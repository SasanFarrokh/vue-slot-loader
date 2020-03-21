<template>
    <div>
        salam
        <span>Test</span>
        <br>
        <b>
            <slot></slot>
        </b>
        <mark>
            <slot name="namedSlot"></slot>
        </mark>
    </div>
</template>

<script>
export default {
    data () {
        return {
            test: 'Foo Bar'
        }
    },
    created () {
        console.log('test')
    }
}
</script>