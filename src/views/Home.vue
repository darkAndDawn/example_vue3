<template>
    <div class="home">
        <section id="page">
            <header>Header</header>
            <nav>
                <div class="catalog">目录</div>
                <ul><li v-for="(item, index) in navList" :key="index" @click="navBar(item)"><a>{{item}}</a></li></ul>
            </nav>
            <main>
                <transition name="comin" mode="out-in">
                    <component :is="isWhich"></component>
                </transition>
            </main>
            <footer>Footer</footer>
        </section>
    </div>
</template>
<script>
    import { ref, reactive } from "vue"
    import V2 from "../components/V2"
    import V3 from "../components/V3"
    import V3Search from "../components/Search"
    import Pixel from "../components/Pixel"
    import Mouseleave from "../components/Mouseleave"
    import Cart from "../components/Cart";
    export default {
        name: "Home",
        components: {
            V2,
            V3,
            V3Search,
            Pixel,
            Mouseleave,
            Cart
        },
        setup() {
            let isWhich = ref("V2")
            let navList = reactive(["V2", "V3", "V3Search", "Pixel", "Mouseleave", "Cart"])
            function navBar(item) {
                isWhich.value = item
            }
            return {
                navList,
                navBar,
                isWhich
            }
        }
    }
</script>
<style lang="less" scoped>
    .home {
        overflow-x: hidden;
    }
    .comin-enter-active {
        animation: mykeyf 1.5s;
    }
    .comin-leave-active {
        animation: mykeyf .5s reverse;
    }
    @keyframes mykeyf {
        0% {
            opacity: 0;
            transform: translateX(100px);
        }
        100% {
            opacity: 1;
            transform: translateX(0px);
        }
    }
    #page {
        display: grid; /* 1.设置display为grid */
        width: 100%;
        height: 100vh;
        grid-template-areas: "head head"
        "nav  main"
        "nav  foot"; /* 2.区域划分 当前为 三行 两列 .表示不需要 留空 */
        grid-template-rows: 80px 1fr 30px; /* 3.各区域 宽高设置 */
        grid-template-columns: 150px 1fr;
        li {
            width: 100%;
            line-height: 40px;
            border-top: 1px solid;
            text-align: left;
            a {
                display: block;
                width: 100%;
                padding-left: 10px;
                line-height: 40px;
            }
        }
        .catalog {
            line-height: 50px;
            font-weight: 600;
        }
    }

    #page > header {
        grid-area: head; /* 4. 指定当前元素所在的区域位置, 从grid-template-areas选取值 */
        /*background-color: #8ca0ff;*/
        display: flex;
        align-items: center;
        font-size: 36px;
        border-bottom: 1px solid;
    }

    #page > nav {
        grid-area: nav;
        /*background-color: #ffa08c;*/
        border-right: 1px solid;
        overflow-y: scroll;


    }
    #page > nav::-webkit-scrollbar{
         width: 5px;
         height: 20px;
     }
    #page > nav::-webkit-scrollbar-track{
        background: rgb(239, 239, 239);
        border-radius:2px;
    }
    #page > nav::-webkit-scrollbar-thumb{
        background: #bfbfbf;
        border-radius:10px;
    }
    #page > nav::-webkit-scrollbar-thumb:hover{
        background: #999;
    }
    #page > nav::-webkit-scrollbar-corner{
        /*background: #179a16;*/
    }

    #page > main {
        grid-area: main;
        /*background-color: #ffff64;*/
        padding: 20px;
    }

    #page > footer {
        grid-area: foot;
        border-top: 1px solid;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
