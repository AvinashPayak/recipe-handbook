<template>
    <div class="rounded-full w-full flex justify-start py-[2px] px-3 gap-1 items-center bg-purple-100">
        <SearchIcon class="w-7 h-7 text-purple-700 " />
        <input @change="searchMeal" v-model="keyword" type="text" class="text-lg text-purple-700 border-2 border-transparent bg-purple-100 focus:border-transparent focus:ring-0"
            placeholder="Search by meal" />
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import SearchIcon from '../public/icons/SearchIcon.vue'
import store from '../store'
import { useRouter, useRoute } from 'vue-router';


const keyword = ref('');
const router = useRouter();
const route = useRoute();

const searchMeal = async ()=>{
  await store.dispatch('searchMeal', keyword.value);
  router.push("/meals/" + keyword.value);
}

onMounted(()=>{
  keyword.value = route.params.keyword;
  if(keyword.value) {
    searchMeal();
  }
})
</script>

<style scoped>
input::placeholder {
  font-size: 14px; /* Adjust the font size as needed */
}
</style>