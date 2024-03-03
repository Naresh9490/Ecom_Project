// For Add Item To Cart //
export const addCart = (product) => {
  return { type: "ADDITEM", payload: product };
};

// For Delete Item To Cart //
export const delCart = (id) => {
    return { type: "DELITEM", payload: id};
  };

export const IncreaseQuantity=(id)=>{
  return {
    type: "INCREASE_QUANTITY",
    payload: id
  }
}

export const DecreseQuantity=(id)=>{
  return{
    type : "DECRESE_QUANTITY",
    payload:id
  }
}




  
