<template>
    <div class="bg-purple-700 text-white py-1 px-3 text-sm align-middle rounded-full flex gap-2 items-center">
        <span>{{ suggestionText }}</span>
        <slot name="icon"></slot>
    </div>
</template>

<script setup>
const props = defineProps({
  suggestionText: {
    type: String
  },
});
</script>