import React, { Component } from 'react'
import { connect } from 'react-redux';
import { removeCard, flipCard } from '../redux/actions/actions';

class AllCards extends Component {

    constructor(props) {
        super(props);

        this.state = { cardRemove: -1 };
    }

    removeCard = (index, e) => {
        console.log(e)
        this.setState({cardRemove: index});
        setTimeout(()=> {
            this.props.removeCard(index);
        }, 500);
    };

    flipCard = (index) => {
        this.props.flipCard(index);
    };

    render() {
        const cardsItems = this.props.cards.map((card, index) =>
            <li key={ index } className={'listingCards__item ' + (card.flipped ? "flipped" : "" )}>
                <div onClick={ () => this.flipCard(index) }>
                    <div className="listingCards__item--question">
                        <p>{ card.question }</p>
                    </div>
                    <div className="listingCards__item--answer">
                        <p>{ card.answer }</p>
                    </div>
                </div>
                <p className="listingCards__item--delete" onClick={ () => this.removeCard(index) }>Delete</p>
            </li>
        );

        return (
            <React.Fragment>
                <ul className="listingCards">
                    { cardsItems }
                </ul>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        cards: state.cards
    };
};

const mapDispatchToProprs = {
    removeCard: removeCard,
    flipCard: flipCard
};

export default connect(mapStateToProps, mapDispatchToProprs)(AllCards);
