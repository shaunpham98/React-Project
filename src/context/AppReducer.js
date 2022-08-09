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

        default:
            return state
    }
}