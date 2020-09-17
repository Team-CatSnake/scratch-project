import React, { Component } from 'react';
import * as actions from '../actions/actions'
import { connect } from 'react-redux';
import axios from "axios";

const mapStateToProps = (state) => ({
  addNameDB: state.recipes.modal.addName,
  addInstructionsDB: state.recipes.modal.addInstructions,
  addIngredientsDB: state.recipes.modal.addIngredients,
  addimagelinkDB: state.recipes.modal.addimagelink,
  showModalDB: state.recipes.modal.showModal

})

const mapDispatchToProps = (dispatch) => ({
  addName: (data) => dispatch(actions.addName(data)),
  addInstructions: (data) => dispatch(actions.addInstructions(data)),
  addIngredients: (data) => dispatch(actions.addIngredients(data)),
  addimagelink: (data) => dispatch(actions.addImageLink(data)),
  showModal: () => dispatch(actions.showModal()),
  setModal: () => dispatch(actions.setModal())
})



class AddRecipe extends Component {

  constructor(props){
    super(props)
    this.sendNewRecipe = this.sendNewRecipe.bind(this)
  }

  closeModalClick() {
    
  }

  sendNewRecipe() {
    console.log(this.props.addInstructionsDB, this.props.addimagelinkDB)
    return axios
      .post(
        "http://localhost:3000/api/addRecipe",
        {
          name: this.props.addNameDB,
          ingredients:this.props.addIngredientsDB,
          instructions:this.props.addInstructionsDB,
          imagelink:this.props.addimagelinkDB 
        }
      )
      .then(this.props.setModal())
      
      .catch((err) => {
        console.error(err.messsage);
      });
  }

  render() {
    return (
  
      <div className='openModal'>
        <form className='inputFields'>
          <p>Recipe Name.</p>
          <input 
            type="text"
            placeholder={'Input recipe name here...'}
            onChange={(e) => this.props.addName(e.target.value)}/>

          <p>Instructions: </p>
          <input 
            type="text"
            placeholder={'Input instructions here...'}
            onChange={(e) => this.props.addInstructions(e.target.value)}/>

          <p>Ingredients: </p>
          <input
           type="text" 
           placeholder={'Input ingredients here...'}
           onChange={(e) => this.props.addIngredients(e.target.value)}/>

          <p>Image Link: </p>
          <input
           type="text"
           placeholder={'Input image link here...'}
           onChange={(e) => this.props.addimagelink(e.target.value)}/>
           
        </form>
        <br/>
        <button onClick={this.sendNewRecipe} className='modalSubmit'>Submit the recipe</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe)