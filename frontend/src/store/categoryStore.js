export const categoryStore = {
    
    state: {
        categories: null,
    },

    mutations: {
        setCategories(state, category) {
            state.categories = category;
        }
    },

    actions: {
        async fetchAllCategories({ commit }) {
            let categories = await fetch("/api/v1/categories");
            categories = await categories.json();
            console.log("Categories ", categories);
            commit("setCategories", categories);
        }
    }
}