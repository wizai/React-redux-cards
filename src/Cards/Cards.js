import React, { Component } from 'react'
import CardsForm from './CardsForm';
import AllCards from './AllCards';

export default class Cards extends Component {

    constructor(props) {
        super(props);

        this.state = { MenuIsOpen :false };
        this.ToggleClass = this.ToggleClass.bind(this);
    }

    ToggleClass = (e) => {
        this.setState({MenuIsOpen: !this.state.MenuIsOpen});
    };

    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <div className="container ">
                        <div className="header">
                            <h1>React - Redux <br/> Flashcards</h1>
                            <span>William Nisole - Romain Ferjule</span>
                        </div>
                        <AllCards />
                        <CardsForm valueFromParent={this.state.MenuIsOpen} action={this.ToggleClass} />
                        <p className="showForm" onClick={this.ToggleClass}>
                            <span>+ </span>
                            Add card
                        </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
