<template>
    <div id="cart" v-if="goods.length > 0">
        <ul>
            <li v-for="(item, index) in goods">
                <input type="checkbox" v-model="checkArr.arr" :value="item"/>
                <img :src="item.img" alt="">
                <div>
                    <div>商品名称：{{item.name}}</div>
                    <div>商品价格：<span>{{item.price}}￥</span></div>
                </div>
                <div class="count">
                    <button :disabled="item.count <= 1" @click="reduce(item.id, index)">-</button>
                    <input type="text" :value="item.count">
                    <button :disabled="item.count >= 10" @click="addCount(item.id, index)">+</button>
                </div>
                <div class="del">
                    <button @click="deleteRow(item.id)">删除</button>
                </div>
            </li>
        </ul>
        <div class="checkAll"><input type="checkbox" v-model="isCheckedAll"/>全选/全不选</div>
        <div class="total">合计：{{ total }}元</div>
    </div>
    <div v-else>购物车为空</div>
</template>

<script>
    import {reactive, computed} from "vue"

    export default {
        name: "Cart",
        setup() {
            let goods = reactive(
                [
                    {id: 1001, name: "小米 10", price: 4999, count: 3, img: require("../assets/images/mi10.jpg")},
                    {id: 1002, name: "Redmi 9", price: 1599, count: 1, img: require("../assets/images/redmi.jpg")},
                    {id: 1003, name: "iphone 12", price: 6799, count: 2, img: require("../assets/images/iphone12.jpg")}
                ]
            )

            // 选中的(必须是proxy对象)
            let checkArr = reactive({
                arr: []
            })

            // 选中的 计算价格
            const total = computed(() => {
                console.log(checkArr)
                let sum = 0
                checkArr.arr.forEach(item => {
                    sum += item.count * item.price
                })
                return sum
            })

            // 全选/全不选
            const isCheckedAll = computed({
                get: () => checkArr.arr.length === goods.length,// 当选中的商品数组长度和 数据的数组长度一样 返回true 全选check自动勾上
                set: val => checkArr.arr = val ? goods : []
            })

            // 删除
            function delFn(arr, id) {
                arr.forEach((item, index) => {
                    if (item.id === id) {
                        arr.splice(index, 1)
                        console.log(goods)
                    }
                })
            }

            function deleteRow(id) {
                delFn(goods, id)
                delFn(checkArr.arr, id)
            }

            // 减
            function reduce(id, index) {
                console.log(id)
                if (goods[index].count <= 1) return
                if (goods[index].id === id) goods[index].count--
            }

            // 加
            function addCount(id, index) {
                console.log(id)
                if (goods[index].count >= 10) return
                if (goods[index].id === id) goods[index].count++
            }

            return {
                goods,
                total,
                checkArr,
                isCheckedAll,
                deleteRow,
                reduce,
                addCount
            }
        }
    }
</script>

<style lang="less" scoped>
    #cart {
        width: 700px;
        margin: auto;

        ul {
            margin: auto;
        }

        li {

            border-bottom: 1px solid;
            display: flex;
            align-items: center;
            justify-content: space-between;

            text-align: left;

            span {
                color: red;
            }
        }

        li:last-of-type {
            border: none;
        }

        img {
            width: 200px;
        }

        .checkAll {
            text-align: right;
            margin: auto;
        }

        .total {
            margin: auto;
            line-height: 50px;
            color: red;
            text-align: right;
        }

        .count {
            margin-left: 50px;

            button {
                width: 30px;
            }

            input {
                margin: 0 5px;
                width: 30px;
                text-align: center;
            }
        }
    }
</style>
