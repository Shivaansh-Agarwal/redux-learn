import { BUY_ICECREAM } from "./actionTypes";

export const buyIceCream = (count = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: count,
  };
};
