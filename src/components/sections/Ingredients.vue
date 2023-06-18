<template>
    <div>
        <div v-for="(ingredient, index) in ingredients" :key="ingredient" class="flex w-full justify-between items-center my-1">
            <p class="text-lg">{{ mealDetails[ingredient] }}</p>
            <span class="bg-gray-100 px-2 my-1 rounded-md shadow-sm text-lg">{{ mealDetails[quantity[index]] }}</span>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
const ingredients = ref([]);
const quantity = ref([]);
import store from '../../store';
const mealDetails = computed(() => store.state.mealDetails);

watch(mealDetails, () => {
    ingredients.value = Object.keys(mealDetails.value).filter(key => key.includes('strIngredient') && (mealDetails.value[key] !== "" && mealDetails.value[key] !== null));
    quantity.value = Object.keys(mealDetails.value).filter(key => key.includes('strMeasure') && (mealDetails.value[key] !== "" && mealDetails.value[key] !== null));
});

onMounted(()=>{
    ingredients.value = Object.keys(mealDetails.value).filter(key => key.includes('strIngredient') && (mealDetails.value[key] !== "" && mealDetails.value[key] !== null));
    quantity.value = Object.keys(mealDetails.value).filter(key => key.includes('strMeasure') && (mealDetails.value[key] !== "" && mealDetails.value[key] !== null));
})
</script>