mutations: {
  ADD_TO_CART(state, product) {
    state.items.push(product)
  },
  REMOVE_FROM_CART(state, productToRemove) {
    state.items = state.items.filter(item => item._id !== productToRemove._id)
  }
}
