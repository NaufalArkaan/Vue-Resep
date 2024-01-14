import axios from "axios";

export default {
    namespaced: true,
    state() {
        return {
            recipes: [],
            recipeDetail: {}
        };
    },
    getters: {},
    mutations: {
        setRecipeData(state, payload) {
            state.recipes = payload;
        },
        setRecipeDetail(state, payload) {
            state.recipeDetail = payload;
        },
        setNewRecipe(state, payload) {
            state.recipes.push.payload;
        }
    },
    actions: {
        async getRecipeData({
            commit
        }) {
            try {
                const {
                    data
                } = await axios.get(
                    "https://recipe-vue-batch2-default-rtdb.firebaseio.com/recipes.json"
                );
                const arr = [];
                for (let key in data) {
                    arr.push({
                        id: key,
                        ...data[key]
                    });
                }
                commit("setRecipeData", arr)
            } catch (err) {
                console.error(err)
            }
        },
        async getRecipeDetail({
            commit
        }, payload) {
            try {
                const {
                    data
                } = await axios.get(
                    `https://recipe-vue-batch2-default-rtdb.firebaseio.com/recipes/${payload}.json`);
                commit("setRecipeDetail", data);
            } catch (err) {
                console.error(err);
            }
        },
        async addNewRecipe({ commit, rootState }, payload) {
            const newData = {
                ...payload,
                username: rootState.auth.userLogin.username,
                createdAt: Date.now(),
                likes: ["null"],
                userId: rootState.auth.userLogin.userId,
            };
            try {
                const { data } = await axios.post(
                    `https://recipe-vue-batch2-default-rtdb.firebaseio.com/recipes.json?
                auth=${rootState.auth.token}`, newData);

                commit("setNewRecipe", { id: data.name, ...newData });
            } catch (err) {
                console.log(err)
            }
        },
        async deleteRecipe({ dispatch, rootState }, payload) {
            try {
                const { data } = await axios.delete(
                    `https://recipe-vue-batch2-default-rtdb.firebaseio.com/
            recipes/${payload}.json?auth=${rootState.auth.token}`);
                await dispatch("getRecipeData")
            } catch (err) {
                console.log(err);
            }
        }
    }
};
