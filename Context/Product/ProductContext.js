import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { api } from '../Global/GlobalConfig';

export const ProductContext = React.createContext();

const headers = { "secret-key": api.headers.secretkey }

export function ProductComponent({ children }) {
  useEffect(() => { getProducts(); }, [])

  const [product, setProduct] = useState({});
  const [filteredProduct, setFilteredProduct] = useState({})
  const setFilter = (filter) => {
    const fil = product.products.filter(d => {
      const keys = Object.keys(filter);
      const ret = false;
      keys.forEach((key) => {
        if ((filter[key]).includes(d.specs[key])) {
          ret = true;
        }
      })
      return ret
    }
    )
    setFilteredProduct(fil)
  }
  const getProducts = () => {
    console.log("geting products from axios")
    axios.get(api.products.get, { headers })
      .then(res => {
        setProduct(res.data);
        setFilteredProduct(res.data.products)
        console.log("got")
      })
  }


  return <ProductContext.Provider value={{ product, setFilter, filteredProduct }}>{children}</ProductContext.Provider>
}

