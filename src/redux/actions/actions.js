export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';
export const FLIP_CARD = 'FLIP_CARD';

export function addCard(question, answer) {
    return { type: ADD_CARD, question: question, answer: answer, flipped: false };
}

export function removeCard(id) {
    return { type: REMOVE_CARD, id: id };
}

export function flipCard(id) {
    return { type: FLIP_CARD, id: id };
}
