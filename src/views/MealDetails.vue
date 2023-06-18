<template>
    <div class="max-w-[1100px] mx-auto h-[100vh]">
      <div class="bg-cover bg-center h-[400px]" :style="{ backgroundImage: getBackgroundImageUrl(mealDetails.strMealThumb) }"></div>
      <div class="rounded-t-[40px] mt-[-100px] min-h-[70vh]  bg-white shadow-2xl w-full p-6 flex flex-col gap-5">
        <div class="flex gap-5">
          <router-link :to="{ name: 'Ingredients' }" :class="{ 'active-link': isRouteActive('Ingredients') }">
            <h3 class="text-[30px]">Ingredients</h3>
          </router-link>
          <router-link :to="{ name: 'Instructions' }" :class="{ 'active-link': isRouteActive('Instructions') }">
            <h3 class="text-[30px]">Instructions</h3>
          </router-link>
        </div>
        <div>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, computed } from "vue";
  import { useRouter, useRoute } from 'vue-router';
  
  import store from '../store';
  const router = useRouter();
  
  const route = useRoute();
  const mealDetails = computed(() => store.state.mealDetails);
  
  const getBackgroundImageUrl = (url) => {
    return `url('${url}')`;
  }
  
  const isRouteActive = (routeName) => {
    return route.name === routeName;
  }
  
  onMounted(async () => {
    await store.dispatch('getMealDetails', route.params.id);
    router.push({ name: 'Ingredients', params: { id: route.params.id } });
  })
  </script>
  
  <style>
  .active-link {
    border-bottom: 4px solid purple;
  }
  </style>
  