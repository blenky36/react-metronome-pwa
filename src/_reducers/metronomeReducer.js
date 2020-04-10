import { START_METRONOME, STOP_METRONOME, SET_CURRENT_BEAT } from '../_constants/actionTypes';

const initialState = { playing: false, intervalID: null, timeSignature: [3, 4], currentBeat: 2, tickSpeed: 250 };

export const metronomeReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case SET_CURRENT_BEAT:
            const newBeat = payload;
            return {
                ...state,
                currentBeat: newBeat
            }
        case START_METRONOME:
            const interval = payload;
            return {
                ...state,
                intervalID: interval,
                playing: true
            }
        case STOP_METRONOME:
            return {
                ...state,
                intervalID: null,
                playing: false,
                currentBeat: 1
            }
        default:
            return state;
    }
}