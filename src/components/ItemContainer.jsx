import React from 'react'
import {connect} from "react-redux";

function ItemContainer(props) {
  return (
    <div>
        <h2>Item Container: {props.items}</h2>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    console.log('state', state);
    console.log('ownProps', ownProps);
    const itemState = ownProps.cake ? state.cakes.numOfCakes : state.iceCreams.numOfIceCreams
    return {
        items: itemState
    }
};

export default connect(mapStateToProps)(ItemContainer)