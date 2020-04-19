import { ADD_CARD, REMOVE_CARD, FLIP_CARD } from '../actions/actions';

const initialState = {
    cards: [
        {
            question: 'How many champions are now in the game "League of Legends?"',
            answer: '129'
        },
        {
            question: 'Which "League of Legends" character leads the Winter\'s Claw tribe?',
            answer: 'Sejuani'
        },
        {
            question: 'Who is the champion Tryndamere married to in "League of Legends?"',
            answer: 'Ashe'
        },
    ]
};

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case ADD_CARD:
            return {
                cards: [
                    ...state.cards,
                    {
                        question: action.question,
                        answer: action.answer,
                        flipped: false
                    }
                ]
            };
        case REMOVE_CARD:
            return {
                cards: state.cards.filter((card, index) => index !== action.id)
            };

        case FLIP_CARD:
            return {
                cards: state.cards.map((card, index) =>
                    (index === action.id)
                        ? {...card, flipped: !card.flipped}
                        : card
                )
            };

        default:
            return state;
    }
}

export default rootReducer;
