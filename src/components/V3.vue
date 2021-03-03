<template>
    <div class="about" ref="about">
        <fieldset style="text-align: center">
            <legend>VUE3</legend>
            <form>
                <label>
                    <input type="text" v-model="state2.stu.id" />
                    <input type="text" v-model="state2.stu.name" />
                    <input type="text" v-model="state2.stu.age" />
                    <input type="submit" @click="addStu" />
                </label>
            </form>
            <transition-group name="listTransition" mode="out-in" tag="ul">
                <li
                        v-for="(item, index) in state.stus"
                        :key="item.id"
                >
                    ID:{{ item.id }} --- {{ item.name }} --- {{ item.age }} <button @click="removeItem(index)">删除</button>
                </li>
            </transition-group>
        </fieldset>
        <!--    <p>{{count}}</p>-->
        <!--    <button @click="myFun">按钮</button>-->
    </div>
</template>
<script>
import { ref, reactive, onMounted, getCurrentInstance, computed } from 'vue'
import { useAddStudent, useRemoveStudent } from '../js/addRem'
// v-if具有比更高的优先级v-for。这意味着该v-if条件将无法访问范围内的变量v-for
export default {
    name: 'V3',
    setup () {
        const internalInstance = getCurrentInstance()
        const { proxy/*ctx*/ } = getCurrentInstance()

        function Jump () {
            console.log("internalInstance:", internalInstance)
            proxy.$router.push("helloWorld")
        }

        let about = ref(null)
        onMounted(() => {
            console.log("ref",about.value) // refs -- >
        })
        let count = ref(0)

        function myFun () {
            count.value++
        }

        let { state, removeItem } = useRemoveStudent()
        let { state2, addStu } = useAddStudent(state)

        return { count, myFun, state, removeItem, state2, addStu, about, Jump }
    }
}


</script>
<style lang="less">
    .listTransition-enter-active {
        animation: myKeyframes 1.5s;
    }
    .listTransition-leave-active {
        animation: myKeyframes .5s reverse;
    }
    @keyframes myKeyframes {
        0% {
            opacity: 0;
            transform: translateX(100px);
        }
        100% {
            opacity: 1;
            transform: translateX(0px);
        }
    }
</style>