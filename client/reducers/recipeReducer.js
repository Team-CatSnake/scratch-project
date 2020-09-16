//import action types
import * as types from '../actions/actionTypes'

//set initial state
const initialState = {
    name: '',
    imagelink: '',
    ingredients: '',
    instructions: '',
    recipesList: [],
  }
  // retrievedRecipe: {},
  // itemsHaveErrored: false,
  // itemsAreLoading: false

//declare reducer and its methods
const recipeReducer = (state = initialState, action) => {
  // let itemsHaveErrored;
  // let itemsAreLoading;
  let recipesList;

  switch (action.type){

    //map over recipes list,updating state from action.payload
    //return updated state
    case types.RETRIEVE_RECIPE: //DEPENDS ON THE RETURNED OBJECT FROM BACKEND
     const newRecipe = {
       name: state.name,
       ingredients: action.payload.ingredients,
       instructions: action.payload.instructions,
       imagelink: action.payload.imagelink,
     }
     recipesList = state.recipesList.slice();
     recipesList.push(newRecipe);
      return {
        ...state,
        recipesList,
        name: '',
        imagelink: '',
        ingredients: '',
        instructions: '',
      }

    case types.SET_SEARCH:
      return {
        ...state,
        //recipesList: [],
        name: action.payload
      }
    //STRETCH: Use when modal has been created
    case types.CREATE_RECIPE:
      itemsAreLoading = action.payload;
      return {
        ...state,
        itemsAreLoading
      }
      default: 
      return state; 
  }
}

//     case types.ITEMS_FETCH_DATA_SUCCESS:
//       recipesList = action.payload;
//       return {
//         ...state,
//         recipesList
//       }

//     case types.UPDATE_NAME:
//       return {
//         ...state,
//         newRecipe : {
//           ...state.newRecipe,
//           name: action.payload
//         }
//       }
    
//     case types.UPDATE_INSTRUCTIONS:
//       return {
//         ...state,
//         newRecipe : {
//           ...state.newRecipe,
//           instructions: action.payload
//         }
//       }

//     case types.UPDATE_INGREDIENTS:
//       return {
//         ...state,
//         newRecipe : {
//           ...state.newRecipe,
//           ingredients: action.payload
//         }
//       }

//     case types.UPDATE_IMAGELINK:
//       return {
//         ...state,
//         newRecipe : {
//           ...state.newRecipe,
//           imageLink: action.payload
//         }
//       }

//     default: 
//       return state; 
//   }
// }

export default recipeReducer