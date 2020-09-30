import React, { Component } from 'react';

class Bomb extends Component {
    state = { count : 0};

    componentDidMount(){
        this.interval = setInterval(() => {
            console.log(this.state.count);
            this.setState({
                count: this.state.count + 1
            })
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    
    countDownReached(){
        clearInterval(this.interval);
        return "BOOM!!!";
    }

    render(){
        return (
            <div>
                <p>{this.state.count === 8? this.countDownReached(): (this.state.count % 2? "tock":"tick")}</p>
            </div>
        );
    }
}

export default Bomb;