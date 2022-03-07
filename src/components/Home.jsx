import React from 'react'

import { CartState } from '../context/Context'
import Filters from './Filters';
import SingleProducts from './SingleProducts';

const Home = () => {
    const { state: {products} } = CartState();

    return (
        <div className='home'>
            <Filters />
            <div className="productContainer">
                {
                    products.map((pod) => {
                        return <SingleProducts pod = {pod} key={pod.id} />
                   }) 
                }
            </div>
        </div>
  )
}

export default Home