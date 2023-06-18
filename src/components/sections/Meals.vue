<template>
    <div v-if="mealsExist" class="md:flex-row flex flex-wrap gap-6 justify-start flex-gap-2 flex-col">
        
            <div  class="md:w-[31%] h-[450px] rounded-xl shadow-md hover:cursor-pointer py-2 w-full" v-for="meal in meals" :key="meal.idMeal" >
                <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
            <div class="h-4/6 rounded-t-xl bg-cover bg-center"
                :style="{ backgroundImage: getBackgroundImageUrl(meal.strMealThumb) }"></div>
            <div class="p-3 flex flex-col gap-2">
                <h1 class="text-[20px] text-ellipsis">{{ meal.strMeal }}</h1>
                <div class="flex gap-2 justify-end items-center">
                    <span class="text-sm underline"
                        :class="meal.strSource ? 'text-blue-500 hover:curson-pointer' : 'text-gray-500 hover:pointer-events-none'"><a
                            target="_blank" :href="meal.strSource">View source</a></span>
                    <button class="w-fit btn text-white p-1 px-2 text-xs rounded-md"
                        :class="meal.strYoutube ? 'bg-red-600 hover:cursor-pointer' : 'bg-gray-500 hover:pointer-events-none'">
                        <a target="_blank" :href="meal.strYoutube">Youtube</a>
                    </button>
                </div>
                <div class="flex justify-between">
                    <div class="flex flex-wrap gap-2">
                        <span class="bg-purple-700 w-fit py-1 px-2 rounded-md text-white text-xs my-auto">{{ meal.strArea }}</span>
                        <span class="w-fit py-1 px-2 rounded-md text-white text-xs my-auto" :class="getDifficultyClass(meal)">{{ getDifficultyText(meal) }}</span>
                    </div>
                    <span class="bg-black w-fit py-1 px-2 rounded-md text-white text-xs my-auto">{{ meal.strCategory }}</span>

                </div>
                <div class="flex gap-1 items-center">
                    <span class="text-xs border border-black w-fit px-2 rounded-md mr-1">Tags:</span>
                    <span v-if="meal.strTags" class="text-xs text-ellipsis">{{ spaceoutTags(meal) }}</span>
                    <span v-else class="text-xs text-ellipsis">No tags present</span>
                </div>
            </div>
        </router-link>
        </div>
        
    </div>
    <div v-else>
            <h1 class="text-[40px] text-gray-400">No recipes to display</h1>
    </div>
</template>


<script setup>

import store from '../../store';
import { computed, ref, reactive } from 'vue'
const ingredients = ref(0);

const meals = computed(() => store.state.meals.data);
const mealsExist = computed(()=> meals?.value? true: false);

const getDifficultyClass = (meal) => {
    const count = countIngredients(meal);
    if(count <= 6) return 'bg-green-700';
    else if(count <=12) return 'bg-yellow-500';
    else return 'bg-red-700';
} 

const getDifficultyText = (meal) => {
    const count = countIngredients(meal);
    if(count <= 6) return 'Easy';
    else if(count <=12) return 'Medium';
    else return 'Hard';
}

const countIngredients = (meal) => {
    const ingredientsValue = Object.keys(meal).filter(key => key.includes('strIngredient') && (meal[key] !== "" && meal[key] !== null)).length;
    ingredients.value = ingredientsValue;
    return ingredientsValue;
}

const spaceoutTags = (meal) => {
    const tags = meal.strTags;
    return tags?.replace(/,/g, ", ");
}

const getBackgroundImageUrl = (url) => {
    return `url('${url}')`;
}

</script>

<style scoped>
.text-ellipsis {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 100%;
}</style>