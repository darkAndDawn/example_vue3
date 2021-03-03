<template>
    <div style="width: 600px; margin: auto">
        <progress class="nes-progress is-error" :value="progress" max="100"></progress>
        <section class="icon-list">
            <!-- Copyright Nintendo -->
            <i class="nes-mario"></i>
            <!--        <i class="nes-ash"></i>-->
            <!--        <i class="nes-pokeball"></i>-->
            <!--        <i class="nes-bulbasaur"></i>-->
            <!--        <i class="nes-charmander"></i>-->
            <!--        <i class="nes-squirtle"></i>-->
            <!--        <i class="nes-kirby"></i>-->
        </section>
        <!-- Dark and Rounded dialog -->
        <section>
            <button type="button" class="nes-btn is-primary" onclick="document.getElementById('dialog-dark-rounded').showModal();">
                Open dark and rounded dialog
            </button>
            <dialog class="nes-dialog is-dark is-rounded" id="dialog-dark-rounded">
                <form method="dialog">
                    <p class="title">Dark and Rounded dialog</p>
                    <p>Alert: this is a dialog.</p>
                    <menu class="dialog-menu">
                        <button class="nes-btn" @click="Cancel">Cancel</button>
                        <button class="nes-btn is-primary" @click="Confirm">Confirm</button>
                    </menu>
                </form>
            </dialog>
        </section>
        <span class="nes-text is-primary">Primary</span>
        <span class="nes-text is-success">Success</span>
        <span class="nes-text is-warning">Warning</span>
        <span class="nes-text is-error">Error</span>
        <span class="nes-text is-disabled">Disabled</span>
        <div style="background-color:#212529; padding: 1rem 0;">
            <label>
                <input type="radio" class="nes-radio is-dark" name="answer-dark" checked />
                <span>Yes</span>
            </label>

            <label>
                <input type="radio" class="nes-radio is-dark" name="answer-dark" />
                <span>No</span>
            </label>
        </div>
    </div>
</template>

<script>
    import { ref, reactive } from "vue"
    export default {
        name: "Pixel",
        setup() {
            let progress = ref(0)
            let setTime = setInterval(()=> {
                progress.value++
                if (progress.value === 100) clearInterval(setTime) //progress.value = 0
            },1000)
            function Cancel() {
                console.log("Cancel")
            }
            function Confirm() {
                console.log("Confirm")
            }
            return {
                progress,
                Cancel,
                Confirm
            }
        }
    }
</script>

<style scoped>

</style>