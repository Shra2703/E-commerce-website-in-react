import React from 'react';
import { items } from '../data';
import Navbar from '../Component/Navbar';

function List(props) {
    return (
        <>
        {/* <Navbar /> */}
         <div className="list page">
            <h3>List Page</h3>
            <div className="item-list">
                {
                    items.map((item) => (
                        <div className="item" key={item.id}
                        >
                            <h3>{item.name}</h3>
                            <img src={item.image} alt={item.name}  />

                        </div>
                    ))
                }
            </div>
         </div>
        </>
    );
}

export default List;