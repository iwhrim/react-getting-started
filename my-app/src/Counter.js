import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 1 }
        this.add = this.add.bind(this);
    }

    add() {
        this.setState((state) => { return { count: this.state.count + 1 } }, () => {
            console.log(this.state);
        });
    }



    render() {
        return (<div>
            <h1>Counter: {this.state.count}</h1>
            <button onClick={this.add}>Click here</button>
        </div>)
    }

}

export default Counter;