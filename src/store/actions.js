import axiosClient from '../utils/axiosCLient';

export async function searchMeal({ commit }, keyword){
    const url = `search.php?s=${keyword}`
    const { data } = await axiosClient.get(url); 
    debugger;
    commit('setSearchedMeals', data.meals);
}