<template>
    <fieldset style="text-align: center">
        <legend>VUE2</legend>
        <form>
            <input type="text" v-model="stu.id" />
            <input type="text" v-model="stu.name" />
            <input type="text" v-model="stu.age" />
            <input type="submit" @click.prevent="addStu" />
        </form>
        <ul>
            <li
                    v-for="(item, index) in stus"
                    :key="item.id"
                    @click="removeStu(index)"
            >
                ID:{{ item.id }} --- {{ item.name }} --- {{ item.age }}
            </li>
        </ul>
    </fieldset>
</template>

<script>
    export default {
        name: 'V2',
        data () {
            return {
                stus: [
                    { id: 1, name: 'zs', age: 10 },
                    { id: 2, name: 'ls', age: 20 },
                    { id: 3, name: 'ww', age: 30 }
                ],
                stu: {
                    id: '',
                    name: '',
                    age: ''
                }
            }
        },
        methods: {
            goRou () {
                this.$router.push('Mouseleave')
            },
            removeStu (index) {
                this.stus = this.stus.filter((value, idx) => idx !== index)
            },
            addStu (e) {
                const stu = Object.assign({}, this.stu)//拷贝一份
                this.stus.push(stu)
                this.stu.id = ''
                this.stu.name = ''
                this.stu.age = ''
            }
        }
    }
</script>
<style scoped>

</style>
