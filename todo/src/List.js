import React from 'react';

function List(props) {

    function DoneImg(props) {
        if (props.done) {
            return (
                <img src="./assets/on.png"></img>
            )
        } else {
            return (
                <img src="./assets/off.png"></img>
            )
        }
    }

    return (
        <ul>
            { props.items.map(
                item => 
                    <li className={item.done ? "done" : ""} id={item.id} key={item.id}>
                        {item.text}
                        <button onClick={()=>{props.onDone(item)}}><DoneImg done={item.done}/></button>
                        <button onClick={()=>{props.onItemDeleted(item)}}><img src="./assets/bin.png"></img></button>
                    </li>
                )
            }

        </ul>
    );
}

export default List