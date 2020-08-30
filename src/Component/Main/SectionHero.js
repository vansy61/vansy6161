import React, { Component } from 'react';

class SectionHero extends Component {

    constructor(props){
        super(props);

        this.state = {
            time: new Date()
        }

    }
    
    componentDidMount() {
        console.log(this);
        
        this.timerID = setInterval(
            () => {
                this.setState({
                    time: new Date()
                });
            },
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div className="text-center py-5 text-size-50 text-primary">
                { this.state.time.toLocaleTimeString() }
            </div>
        );
    }

}

export default SectionHero;