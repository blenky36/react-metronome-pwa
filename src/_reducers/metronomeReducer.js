import { START_METRONOME, STOP_METRONOME, SET_CURRENT_BEAT, SET_TIME_SIGNATURE, SET_TEMPO, SET_SOUND } from '../_constants/actionTypes';

const initialState = { playing: false, intervalID: null, timeSignature: [4, 4], currentBeat: 0, tempo: 120, sound: 'wood' };

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
                currentBeat: 0
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
        case SET_SOUND:
            const sound = payload;
            return {
                ...state,
                sound
            }
        default:
            return state;
    }
}