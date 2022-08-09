import React, { createContext, useReducer} from 'react';
import AppReducer from './AppReducer'

const initialState = {
    recipes: [
        {id:1, recipe: 'Kimchi Fried Rice'},
        {id:2, recipe: 'Pepperoni Pizza'},
        {id:3, recipe: 'Scotch Fillet Steak'}
    ]
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    const removeRecipe = (id) => {
        dispatch({
            type: 'REMOVE_RECIPE',
            payload: id
        })
    }

    const addRecipe = (recipe) => {
        dispatch({
            type: 'ADD_RECIPE',
            payload: recipe
        })
    }

    return (
        <GlobalContext.Provider value={{
            recipes: state.recipes,
            removeRecipe,
            addRecipe,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}