import React from 'react'
import { connect } from 'react-redux';
import {buyIceCream } from "../redux/actions";

function IceCreamContainer(props) {
  return (
    <div>
        <h2>IceCream Count: {props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>Buy</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
        numOfIceCreams: state.iceCreams.numOfIceCreams
    }
};
const dispatchStateToProps = (dispatch) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    };
};

export default connect(mapStateToProps, dispatchStateToProps)(IceCreamContainer);