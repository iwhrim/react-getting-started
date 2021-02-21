import React from 'react';
import Card from './Card';

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
                    <li id={item.id} key={item.id}>
                        <Card className={item.done ? "done item" : "item"}>
                            {item.text}
                            <div>
                                <button onClick={() => { props.onDone(item) }}><DoneImg done={item.done} /></button>
                                <button onClick={() => { props.onItemDeleted(item) }}><img src="./assets/bin.png"></img></button>
                            </div>
                        </Card>
                    </li>
            )
            }

        </ul>
    );
}

export default List