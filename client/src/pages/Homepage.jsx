import React from 'react'

import Featured from '../components/Featured'
import ProductList from '../components/ProductList'

const Homepage = () => {
  window.scroll(0, 0);

  return (
    <div>
      <Featured/>
      <ProductList/>
    </div>
  )
}

export default Homepage