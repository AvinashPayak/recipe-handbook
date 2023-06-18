import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import MealDetails from '../views/MealDetails.vue'
import Meals from '../components/sections/Meals.vue'
import Ingredients from '../components/sections/Ingredients.vue'
import Instructions from '../components/sections/Instructions.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: '/meals/:keyword?',
                name: 'Meal',
                component: Meals
            },
        ]
    },
    {
        path: '/meal/:id',
        name: 'mealDetails',
        component: MealDetails,
        children: [
            {
                path: '',
                redirect: 'ingredients',
            },
            {
                path: 'ingredients',
                name: 'Ingredients',
                component: Ingredients
            },
            {
                path: 'instructions',
                name: 'Instructions',
                component: Instructions
            },
        ]
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;