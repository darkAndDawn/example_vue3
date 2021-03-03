<template>
    <div class="about" ref="about">
        <fieldset style="text-align: center">
            <legend>VUE3</legend>
            <input type="text" placeholder="搜索" v-model="searchTxt.txt">
            <ul>
                <li
                        v-for="(item, index) in retList"
                        :key="index"
                >
                    {{ item }}
                </li>
            </ul>
        </fieldset>
    </div>
</template>

<script>
    import {ref, reactive, computed} from 'vue'
    export default {
        name: "V3Search",
        setup () {
            const searchTxt = reactive({
                txt: ""
            })
            let list = reactive(["蜘蛛侠","超级蜘蛛侠","成龙历险记","猫和老鼠","钢铁侠","不锈钢","机器猫"])
            const retList = computed(() => list.filter(item => item.includes(searchTxt.txt)))

            return {
                retList,
                searchTxt,
            }
        }
    }
</script>

<style scoped>

</style>