import { DETAIL_PAGE, FILTER_DIETS, ORDER_BY_HEALTHSCORE, ORDER_RECIPES, GET_LIST_DIETS, GET_RECIPE_DETAIL, GET_RECIPE_NAME, GET_RECIPES, DELETE_RECIPE, UPDATE_RECIPE, FILTER_CREATED, CREATE_RECIPE } from '../actions'

//Importamos la acciones.
//Creamos el estado inicial
const initialState = {
    recipes: [],
    startedRecipes: [],
    dietList: [],
    recipeDetail: {}
};
//Creamos el reducer
function rootReducer(state = initialState, { type, payload }) {
    //Switch case por los recipes
    switch (type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: payload,
                startedRecipes: payload
            }

        case GET_RECIPE_NAME:
            return {
                ...state,
                recipes: payload
            }

        case GET_RECIPE_DETAIL:
            return {
                ...state,
                recipeDetail: payload
            }

           case CREATE_RECIPE:
            return{
                ...state,
            }

        case ORDER_RECIPES:
            return {
                ...state,
                recipes: state.recipes.sort((a, b) => {
                    if (payload === 'A-z') {
                        if (a.name < b.name) return -1;
                        if (b.name < a.name) return 1;
                        return 0
                    } else if (payload === 'Z-a') {
                        if (b.name < a.name) return -1;
                        if (a.name < b.name) return 1;
                        return 0
                    }
                })
            }
        case ORDER_BY_HEALTHSCORE:
            return {
                ...state,
                recipes: state.recipes.sort((a, b) => {
                    if (payload === 'L-H') {
                        if (a.healthScore < b.healthScore) return -1;
                        if (b.healthScore < a.healthScore) return 1;
                        return 0
                    } else if(payload === 'H-L') {
                        if (b.healthScore < a.healthScore) return -1;
                        if (a.healthScore < b.healthScore) return 1;
                        return 0
                    }
                })
            }
        case GET_LIST_DIETS:
            return {
                ...state,
                dietList: payload
            }
        case FILTER_DIETS:
            const allRecipesFilter = state.startedRecipes;
            const recipesFilters = allRecipesFilter.filter(r => r.dietTypes?.some(d => d.toLowerCase() === payload.toLowerCase()))           
            const filteredDiets = allRecipesFilter.filter(r =>{
              
             for(let i=0 ;i< r.diets?.length ; i++ ){
               if(r.diets[i].name.toLowerCase() === payload.toLowerCase()){
                return true

              } 
             } 
             return false
            })   
            
            return {
              ...state,
              recipes: [...recipesFilters, ...filteredDiets]
                         
            };

            case FILTER_CREATED:
                let allCreated = state.startedRecipes;
                let filterCreated = payload === "db"?allCreated.filter(el => typeof el.id === "string")
                : allCreated.filter(el => typeof el.id === "number");
                return {
                    ...state,
                    recipes : payload === "All" ? state.startedRecipes : filterCreated
                }
            
        case DETAIL_PAGE:
            return {
                ...state,
                recipeDetail: payload
            }
            case DELETE_RECIPE: 
            return {
                ...state,
                recipes: state.recipes.filter((rcp)=> rcp.id !== payload)
            }
            case UPDATE_RECIPE:
                return {
                    ...state,
                    recipes: payload
                }
        default:
            return state;
    }
}
//Exportamos el reducer
export default rootReducer;