<template>
    <div class="col-12 col-sm-8">
      <RecipeDescription/>
      <RecipeIngredients/>
      <RecipeDirections/>
    </div>
</template>

<script setup>
import { onMounted } from "vue"
import { useRoute } from "vue-router"
import { useStore } from "vuex"
import RecipeDirections from "./RecipeDirections.vue";
import RecipeIngredients from "./RecipeIngredients.vue";
import RecipeDescription from "./RecipeDescription.vue";
const store = useStore()
const route = useRoute()
onMounted(async () => {
    await store.dispatch(

        "recipe/getRecipeDetail", route.params.id
    )
})
</script>