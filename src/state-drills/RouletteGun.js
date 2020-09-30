import React, { Component } from 'react';

class RouletteGun extends Component {
    static defaultProps = {
        bulletInChamber: 8
    }

    state = {
        chamber: null,
        spinningTheChamber: false
    }

    componentWillUnmount(){
        clearTimeout(this.timeout);
    }

    handleTimeout = () => {
        const ranBullet = Math.ceil(Math.random() * 8)
        this.setState({chamber: ranBullet, spinningTheChamber: false});
        console.log(this.state.chamber);
    }
    
    triggerPulled = () => {
        this.setState({spinningTheChamber: true});
        this.timeout = setTimeout(this.handleTimeout, 2000);
    }

    renderText() {
        // const {chamber, spinningTheChamber} = this.state;
        // const {bulletInChamber} = this.props;
        if(this.state.spinningTheChamber){
            return "spinning the chamber and pulling the trigger! ...";
        } else if(this.state.chamber === this.props.bulletInChamber){
            return "BANG!!!!";
        } else {
                return "you're safe!"
        }
    }

    render() {
        return (
            <div>
                <p>{this.renderText()}</p>
                <button onClick={this.triggerPulled}>Pull the trigger!</button>
            </div>
        );
    };
};

export default RouletteGun;