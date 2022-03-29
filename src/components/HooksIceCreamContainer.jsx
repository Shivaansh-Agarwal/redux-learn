import React from 'react'
import {useSelector, useDispatch} from "react-redux"; 
import {buyIceCream} from "../redux/actions";

function HooksIceCreamContainer() {
    const numOfIceCreams = useSelector(state => state.iceCreams.numOfIceCreams);
    const dispatch = useDispatch();
  return (
    <div>
        <h2>Ice Cream Count: {numOfIceCreams}</h2>
        <button onClick={()=>{
            dispatch(buyIceCream(2))
        }}>Buy</button>
    </div>
  )
}

export default HooksIceCreamContainer