import { createSlice } from "@reduxjs/toolkit";
const initialState = JSON.parse(localStorage.getItem('cart')) ?? [];

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart(state,action){
           
            state.push(action.payload);
        },
        deleteFromCart(state,action)
        {
               let i = 0;
            // return state.filter(item =>  item.id!=action.payload.id)
            return state.filter((item)=>{
                  if( i === 0 && item.id===action.payload.id)
                  {
                      i =1
              
                  }
                  else 
                    {
                           return item
                    }
            })
        }
    }

})
export const {addToCart,deleteFromCart} = cartSlice.actions;
export default cartSlice.reducer;