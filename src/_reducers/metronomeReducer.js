import { START_METRONOME, STOP_METRONOME, SET_CURRENT_BEAT, SET_TIME_SIGNATURE, SET_TEMPO } from '../_constants/actionTypes';

const initialState = { playing: false, intervalID: null, timeSignature: [4, 4], currentBeat: 1, tempo: 120 };

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
        case SET_TIME_SIGNATURE: 
            const ts = payload;
            return {
                ...state,
                timeSignature: ts
            }
        case SET_TEMPO:
            const tempo = payload;
            return {
                ...state,
                tempo
            }
        default:
            return state;
    }
}