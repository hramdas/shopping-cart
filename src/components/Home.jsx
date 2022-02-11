import React from 'react';
import {Header} from "./Header"
import { CartState } from '../context/Context';

const Home = () => {
    const {state : {products}} = CartState()
    return (
        <div className='home'>
             <Header/>
             {/* <Filters /> */}
             <div>
                 {products.map((prod)=>{
                     return <div key={prod.id}>
                         {prod}
                    </div>
                 })}
             </div>
        </div>
    );
}

export default Home;
