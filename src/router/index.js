import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Ingredients from '../views/Ingredients.vue'
import Meals from '../views/Meals.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/ingredients',
        name: 'Ingredients',
        component: Ingredients
    },
    {
        path: '/meals',
        name: 'Meals',
        component: Meals
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;