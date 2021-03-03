<template>
    <div>
        <div class="Click" @click="Click">Click</div>
        <div class="box" :style="show ? '-webkit-transition: .3s;opacity: 1;top: -0px;' : '-webkit-transition: .3s;opacity: 0;top: -50px;'"></div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        },
        methods: {
            Click() {
                this.show = !this.show
            }
        }
    }
</script>

<style lang="less" scoped>
.box {
    background-color: pink;
    width: 100px;
    height: 100px;
    opacity: 0;
    position: relative;
    top: -50px;
}
</style>
