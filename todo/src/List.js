import React from 'react';

function List(props) {

    return (
        <ul>
            { props.items.map(
                item => 
                    <li id={item.id} key={item.id}>
                        {item.text}
                        <button onClick={()=>{props.onItemDeleted(item)}}><img src="./assets/bin.png"></img></button>
                    </li>
                )
            }

        </ul>
    );
}

export default List