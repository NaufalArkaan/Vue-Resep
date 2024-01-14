<template>
  <div class="container-md my-5 py-5">
    <div class="recipe_title text-center">
      <h2>All Recipe</h2>
      <p style="font-size: 15px">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
        blanditiis delectus. Ea provident repellendus deleniti, corrupti quasi
        praesentium vitae soluta distinctio optio voluptatibus consequatur!
        Dolor repellendus recusandae minima quod corrupti!
      </p>
    </div>
    <div class="recipe_list-recipe">
      <recipe-list :recipes="recipeList" v-if="recipeListStatus">
      </recipe-list>
    </div>
  </div>
</template>

<script setup>
import RecipeList from "../recipe/RecipeList.vue";
import { onMounted, ref } from "vue";
import { useStore } from "vuex";
const store = useStore();
const recipeListStatus = ref(false);
const recipeList = ref();

onMounted(async () => {
  try {
    await store.dispatch("recipe/getRecipeData");
    recipeListStatus.value = true;
    recipeList.value = store.state.recipe.recipes;
  } catch (error) {
    console.log(error);
  }
});
</script>


