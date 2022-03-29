import React from 'react'
import {connect} from "react-redux";
import {buyCake} from "../redux/actions";

const CakeContainer = (props) => {
  return (
    <div>
        <h1>Number of Cakes: {props.numOfCakes}</h1>
        <button onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

/**
 * 3 Steps:
 * 
 * 1. Define a function called mapStateToProps
 *  (When you want to access Redux State in your application you need to define mapStateToProps)
 *  You can name it anything you want, but this is the convention.
 *  In larger applications you might also use 'selectors'.
 * 
 * 2. Define a funciton called mapDispatchToProps
 * This method gets a dispatch method as a parameter and allows us to map, actionCreators
 * to props in our component.
 * 
 * 3. Connect these 2 functions with our react component.
 */

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cakes.numOfCakes
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
