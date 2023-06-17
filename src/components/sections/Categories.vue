<template>
    <div class="flex flex-col gap-4">
        <h2 class="text-[22px] mx-auto">What's on your mind?</h2>
        <div class=" gap-4 grid grid-rows-2 overflow-x-auto grid-flow-col auto-cols-max">
            <div v-for="(category, index) in categories" class="relative h-[120px] w-[120px] rounded-xl flex-shrink-0"
                :key="category.idCategory">
                <div class="absolute inset-0 bg-purple-500 bg-opacity-50 z-10 rounded-xl"></div>
                <div class="relative bg-center bg-fit overflow-hidden rounded-xl"
                    :style="{ backgroundImage: getBackgroundImageUrl(category.strCategoryThumb) }"
                    style="width: 100%; height: 100%;"></div>
                <h2 class="z-20 relative top-[-60%] left-0 text-[18px] text-center" :class="getTextColour(index)">{{
                    category.strCategory }}</h2>
            </div>
        </div>
        <div class="border border-purple-700"></div>
            <div class="flex relative gap-2 rounded-xl h-[120px]">
                <div class="w-2/5 relative">
                    <div class="absolute bg-center bg-cover bg-opacity-20 z-12 overflow-hidden rounded-xl z-12"
                        :style="{ backgroundImage: getBackgroundImageUrl('../../public/svgs/RandomIcon.svg') }"
                        style="width: 100%; height: 100%;"></div>
                    <div class="absolute inset-0 bg-pink-900  bg-opacity-50 z-10 rounded-xl"></div>
                    <h3 class="relative p-3 z-20 text-white  text-xl">Select <br> <span class="text-[28px]">at</span> <span
                            class="text-[28px] font-normal inline-block">Random?</span></h3>
                </div>
                <div class="w-3/5 relative">
                    <div class="absolute bg-left  bg-contain bg-no-repeat bg-opacity-20 z-12 rounded-xl z-12 w-full"
                        :style="{ backgroundImage: getBackgroundImageUrl('../../public/svgs/CookingIcon.svg') }"
                        style="width: 100%; height: 100%;"></div>
                    <div class="w-full  absolute inset-0 bg-purple-300 bg-opacity-80 z-8 rounded-xl"></div>
                    <h3 class="relative p-2 pt-2 text-[22px] text-purple z-20">Choose <span class="text-white">a
                        </span>Recipe</h3>
                    <h1 class="relative p-2 text-[50px] text-purple w-full text-right z-20"><span
                            class="text-white">Aa</span> -Zz</h1>
                </div>
            </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axiosClient from '../../utils/axiosCLient';

const categories = ref([]);

const getBackgroundImageUrl = (url) => {
    return `url('${url}')`;
}

const getTextColour = (index) => {
    if ([1, 4].includes(index)) {
        return 'text-purple'
    }
    else return 'text-white'
}

onMounted(async () => {
    const response = await axiosClient.get('/categories.php');
    console.log("response", response.data);
    categories.value = response.data.categories;
})
</script>