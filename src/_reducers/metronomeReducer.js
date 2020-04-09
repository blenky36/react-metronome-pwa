import { START_METRONOME, STOP_METRONOME, SET_CURRENT_BEAT } from '../_constants/actionTypes';

const initialState = { playing: false,  intervalID: null, timeSignature: [4, 4], currentBeat: 1};

export const metronomeReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case SET_CURRENT_BEAT:
            const newBeat = payload;
            return {
                ...state,
                currentBeat: newBeat
            }
        case START_METRONOME: 
        case STOP_METRONOME: 
        default:
            return state;
    }
}