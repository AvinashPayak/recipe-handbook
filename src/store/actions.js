import axiosClient from '../utils/axiosCLient';

export async function searchMeal({ commit }, keyword){
    const url = `search.php?s=${keyword}`
    const { data } = await axiosClient.get(url); 
    commit('setSearchedMeals', data.meals);
}

export async function getMealDetails({ commit }, id){
    const url = `lookup.php?i=${id}`
    const { data } = await axiosClient.get(url); 
    commit('setMealDetails', data.meals[0]);
}

