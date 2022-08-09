export default (state, action) => {
    switch (action.type) {
        case 'REMOVE_RECIPE':
            return {
                recipes: state.recipes.filter(recipe => {
                    return recipe.id !== action.payload
                })
            }
        case 'ADD_RECIPE':
            return {
                recipes: [action.payload, ...state.recipes]
            }
        case 'EDIT_RECIPE':
            const updateRecipe = action.payload;
            const updateRecipes = state.recipes.map(recipe => {
                if(recipe.id === updateRecipe.id) {
                    return updateRecipe
                }
                return recipe;
            })
            return {
                recipes: updateRecipes
            }

        default:
            return state
    }
}