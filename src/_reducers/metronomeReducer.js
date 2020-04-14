import { START_METRONOME, STOP_METRONOME, SET_CURRENT_BEAT, SET_TIME_SIGNATURE, SET_TEMPO, SET_SOUND, ADD_EMPHASISED_BEAT, REMOVE_EMPHASISED_BEAT } from '../_constants/actionTypes';

const initialState = { playing: false, intervalID: null, timeSignature: [4, 4], currentBeat: 1, tempo: 120, sound: 'woodLow', emphasisedBeats: [1] };

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
        case ADD_EMPHASISED_BEAT:
            const beatNumberToAdd = payload;
            return {
                ...state,
                emphasisedBeats: [...state.emphasisedBeats, beatNumberToAdd]
            }
        case REMOVE_EMPHASISED_BEAT:
            const beatNumberToRemove = payload;
            return {
                ...state,
                emphasisedBeats: state.emphasisedBeats.filter(x => x !== beatNumberToRemove)
            }
        default:
            return state;
    }
}