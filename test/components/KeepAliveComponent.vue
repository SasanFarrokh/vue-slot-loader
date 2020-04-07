<template>
    <div>
        <keep-alive>
            <child-component ref="cm" v-if="show"></child-component>
        </keep-alive>
    </div>
</template>

<script>
const ChildComponent = require('./ChildComponent.vue').default;

module.exports = {
    components: {
        ChildComponent
    },
    data () {
        return {
            show: true
        }
    },
    mounted () {
        this.cm = this.$refs.cm
    }
}
</script>
