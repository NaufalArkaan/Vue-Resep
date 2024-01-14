<template>
    <div class="recipe_list-recipe row">
        <recipe-card v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"></recipe-card>
    </div>
</template>

<script setup>
import RecipeCard from './RecipeCard.vue';

defineProps({
recipes: Array
})
</script>

