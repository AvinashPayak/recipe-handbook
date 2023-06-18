<template>
    <div class="py-3">
        <div v-for="(instruction, index) in instructions" class="flex gap-2 items-start my-6 " :key="instruction">
            <span class="px-5 text-[30px] py-1 bg-gray-200 rounded-full">{{ index + 1 }}</span>
            <p>{{ instruction }}</p>
        </div>
    </div>
</template>

<script setup>

import { computed, onMounted, ref, watch } from "vue";
const instructions = ref([]);
import store from '../../store';
const mealDetails = computed(() => store.state.mealDetails);
watch(mealDetails, () => {
    const wordsArray = mealDetails.value.strInstructions.split(" ");
    const modifiedArray = wordsArray.slice(2);
    const modifiedString = modifiedArray.join(" ");
    instructions.value = modifiedString.split(/\r\n+/)
        .map(point => point.replace(/^\d+\.\s*/, ''))
        .filter(point => point.trim() !== '');

});

onMounted(() => {
    const wordsArray = mealDetails.value.strInstructions.split(" ");
    const modifiedArray = wordsArray.slice(2);
    const modifiedString = modifiedArray.join(" ");
    instructions.value = modifiedString.split(/\r\n+/)
        .map(point => point.replace(/^\d+\.\s*/, ''))
        .filter(point => point.trim() !== '');


})

/* 

\r\nServes 2\r\n\r\n\r\n1. \r\n\r\nAdjust racks to top and middle positions and preheat oven to 450 degrees. Wash and dry all produce. Dice sweet potatoes into 1/2-inch pieces. Toss on a baking sheet with a drizzle of oil, salt, and pepper. Roast on top rack for 12 minutes (we'll roast the zucchini then). \r\n\r\n\r\n2. \r\n\r\nMeanwhile, halve and core apple; thinly slice into half-moons. Peel and finely chop garlic. Quarter lemon. Trim and halve zucchini lengthwise; cut crosswise into 1/2-inch-thick half-moons. Toss on a second baking sheet with a drizzle of oil and a pinch of salt and pepper. Set aside. \r\n\r\n\r\n3. \r\n\r\nPat pork dry with paper towels and season all over with salt and pepper. Heat a drizzle of oil in a large pan over medium-high heat. Add pork and cook until browned and cooked through, 4-5 minutes per side. Turn off heat; transfer to a plate. \r\n\r\n\r\n4. \r\n\r\nOnce sweet potatoes have roasted 12 minutes, transfer baking sheet with zucchini to middle rack and continue roasting until both veggies are browned and softened, 12-15 minutes more. \r\n\r\n\r\n5. \r\n\r\nMeanwhile, melt 1 TBSP butter (2 TBSP for 4 servings) in pan used for pork over medium-high heat. Add apple and season with salt and pepper. Cook, scraping up any browned bits from bottom of pan, until apple is slightly softened, 2-3 minutes. Add garlic; cook until fragrant, 30 seconds. Add 1/z cup water (3/4 cup for 4), stock concentrate, and 11/2 tsp sugar (3 tsp for 4). Cook, stirring, until sauce has thickened and apple is very tender, 3-5 minutes. Season with salt and pepper. \r\n\r\n\r\n6. \r\n\r\nRemove pan with apple from heat; stir in 1 TBSP butter (2 TBSP for 4 servings) and a squeeze of lemon juice. Divide pork, zucchini, and sweet potatoes between plates. Top pork with glazed apple sauce. Top zucchini with a squeeze of lemon juice. "*/

</script>