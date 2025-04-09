<template>

    <dialog class="modal" :open="aperta">
    <div class="modal-box">

        <div class="border-b border-blue-500">
            <slot name="header" />
        </div>
        <div class="my-5">
            <slot name="body"/>
        </div>

        <div class="border-t border-t-blue-500 pt-5">
            <slot name="footer"/>
        </div>
    </div>
    </dialog>

    <div v-if="aperta" class="fixed top-0 w-screen h-screen z-10 bg-black opacity-40"></div>

</template>

<script lang="ts" setup>

    interface Props {
        aperta?: boolean;        
    }

    withDefaults( defineProps<Props>(), {
        aperta: false
    })
</script>