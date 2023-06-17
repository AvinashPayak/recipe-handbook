<template>
    <div class="rounded-full w-full flex justify-start py-[2px] px-3 gap-1 items-center bg-purple-100">
        <SearchIcon class="w-7 h-7 text-purple-700 " />
        <input @change="searchMeal" v-model="keyword" type="text" class="text-lg text-purple-700 border-2 border-transparent bg-purple-100 focus:border-transparent focus:ring-0"
            placeholder="Search by meal" />
    </div>
</template>

<script setup>
import { ref } from 'vue';
import SearchIcon from '../public/icons/SearchIcon.vue'
import store from '../store'

const keyword = ref('');

const searchMeal = ()=>{
  keyword.value;
  store.dispatch('searchMeal', keyword.value);
}
</script>

<style scoped>
input::placeholder {
  font-size: 14px; /* Adjust the font size as needed */
}
</style>