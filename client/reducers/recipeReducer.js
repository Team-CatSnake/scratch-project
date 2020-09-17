//import action types
import * as types from '../actions/actionTypes'

//set initial state
const initialState = {
    name: '',
    imagelink: '',
    ingredients: '',
    instructions: '',
    recipesList: [],
    showModal: false,
    modal: {
      addName: '',
      addInstructions: '',
      addIngredients: '',
      addimagelink: '',
    }
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
       name: action.payload.name,
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
        recipesList: [],
        name: action.payload
      }
    case types.SHOW_MODAL:
      return {
        ...state,
        showModal: true,
      }
    case types.CLOSE_MODAL:
      return {
        ...state,
        showModal: false,
      }
      case types.SET_MODAL:
        console.log(state.showModal)
        return {
          ...state,
          showModal: !state.showModal,
        }

    case types.ADD_NAME:
      return {
        ...state,
        modal : {
          ...state.modal,
          addName: action.payload
        }
      }
    
    case types.ADD_INSTRUCTIONS:
      return {
        ...state,
        modal : {
          ...state.modal,
          addInstructions: action.payload
        }
      }

    case types.ADD_INGREDIENTS:
      return {
        ...state,
        modal : {
          ...state.modal,
          addIngredients: action.payload
        }
      }

    case types.ADD_IMAGELINK:
      return {
        ...state,
        modal : {
          ...state.modal,
          addimagelink: action.payload
        }
      }

      case types.CREATE_RECIPE:
        return {
          ...state,
          modal : {
            ...state.modal,
            addName:'',
            addIngredients:'',
            addInstructions:'',
            addimagelink:''
          }
        }
        default: 
        return state; 
    }
  }
    //STRETCH: Use when modal has been created
   

//     case types.ITEMS_FETCH_DATA_SUCCESS:
//       recipesList = action.payload;
//       return {
//         ...state,
//         recipesList
//       }



export default recipeReducer