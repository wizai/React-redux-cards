import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCard } from '../redux/actions/actions';

class CardsForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            question: '',
            answer: '',
            flipped: false,
        };
    }

    handleChange = (e) => {
        if (e.target.value) {
            this.setState({[e.target.name]: e.target.value});
        }
    };

    handleSubmission = (e) => {
        e.preventDefault();

        let { question, answer } = this.state;
        this.props.addCard(question, answer);

        this.setState({ question: '', answer: '', flipped: false });
        this.closeForm.click();
    };

    render() {
        return (
            <React.Fragment>
                <div className={'formCards ' +  (this.props.valueFromParent ? "open" : "" )}>
                    <span className="formCards__close" ref={input => this.closeForm = input} onClick={this.props.action}>&#10005;</span>
                    <div className="header">
                        <h1>Add new card</h1>
                    </div>
                    <form onSubmit={ this.handleSubmission } className="formCards__form">
                        <div className="formCards__row">
                            <label htmlFor="question">Question</label>
                            <input type="text" id="question" name="question" value={ this.state.question } onChange={ this.handleChange } required />
                        </div>
                        <div className="formCards__row">
                            <label htmlFor="answer">Answer</label>
                            <input type="text" id="answer" name="answer" value={ this.state.answer } onChange={ this.handleChange } required />
                        </div>
                        <div className="formCards__actions">
                            <button type="submit">Add Card</button>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }

}

export default connect(
    null,
    {
        addCard: addCard
    }
)(CardsForm);
