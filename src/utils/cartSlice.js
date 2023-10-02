import { createSlice } from "@reduxjs/toolkit";

//createslice will take a config.This config will have a name,initialstate,reducers .Initialstate is an object.It will have an items which will be intially empty.Reducers is object.It will take different types of actions.eg additem,clearcart.Each action will have a reducer function.

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating the state here
      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.items.pop(action.payload);
    },
    clearCart: (state) => {
      state.items.length = 0;
      //state = [] . This will not work.
    },
  },
});
//export actions & reducer.
export const { addItem, deleteItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
