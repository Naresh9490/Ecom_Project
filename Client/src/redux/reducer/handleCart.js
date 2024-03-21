const cart = [];

const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case "ADDITEM":
      // Check if Product is already Exists //
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // Increase the quantity//
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case "DELITEM":
      const updatedItems = state.filter((item) => item.id !== product);
      return updatedItems;
      break;
    case "INCREASE_QUANTITY":
      // console.log("Increasing quantity for product with id:", product);
      return state.map((item) =>
        item.id === product ? { ...item, qty: item.qty + 1 } : item
      );
      break;
    case "DECRESE_QUANTITY":
      // console.log("Increasing quantity for product with id:", product);
      return state.map((item) =>
        item.id === product && item.qty > 0 ? { ...item, qty: item.qty - 1 } : item
      ).filter(item => item.qty > 0);


      
      break;
    default:
      return state;
      break;
  }
};

export default handleCart;
