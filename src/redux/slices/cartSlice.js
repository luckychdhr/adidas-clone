import { createSlice } from '@reduxjs/toolkit'
import { dummyProducts } from '../../mock/dummyProducts'

const initialState = {
  products: [...dummyProducts],
  cartCount:0
}

export const cartSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    handleCart: (state, action) => {
      const productIndex = state.products.findIndex(item => item.id === action.payload.id)
      if (productIndex !== -1) {
        if (action.payload.type === 'add') {
          state.products[productIndex].quantity += 1
        } else {
          state.products[productIndex].quantity -= 1
        }
      }
      state.cartCount = state.products.filter(item=>item.quantity>0).length
    },
  },
})

export const { handleCart } = cartSlice.actions

export default cartSlice.reducer