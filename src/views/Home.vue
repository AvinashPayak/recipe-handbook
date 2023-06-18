<template>
    <div class="max-w-[1100px] mx-auto">
        <div class="p-2 w-full flex flex-col gap-y-5">
            <h1 class="text-[47px] leading-tight"><span class="text-xl inline-block w-full">Hello,</span>What recipe are you
                looking for?</h1>
            <div class="flex gap-x-5 justify-between">
                <SearchBar />
                <!-- <div class="p-3 bg-purple-700 rounded-full">
                    <FilterIcon class="w-6 h-6" currentColor="#FFF" />
                </div> -->
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import FilterIcon from '../public/icons/FilterIcon.vue'
import axiosClient from '../utils/axiosCLient'
import Meals from '../components/sections/Meals.vue'

const ingredients = ref([]);

onMounted(async ()=>{
    ingredients.value = await axiosClient.get('/list.php?i=list');
})
</script>