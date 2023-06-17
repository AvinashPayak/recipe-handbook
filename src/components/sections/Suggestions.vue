<template>
    <div class="flex gap-2">
        <SuggestionTile v-for="component in components" :key="component.id" :suggestionText="component.suggestionText">
            <template #icon>
                <component :is="component.icon" class="h-4 w-4"></component>
            </template>
        </SuggestionTile>
    </div>
</template>

<script setup>
import SuggestionTile from '../common/Tiles/SuggestionTile.vue'
import RecommendedIcon from '../../public/icons/RecommendedIcon.vue';
import TopRatedIcon from '../../public/icons/TopRatedIcon.vue';

const components = [
    {
        id: 1,
        icon: RecommendedIcon,
        suggestionText: 'Recommended'
    },
    {
        id: 1,
        icon: TopRatedIcon,
        suggestionText: 'Highest rated'
    },
]

</script>
