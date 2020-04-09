import { START_METRONOME, STOP_METRONOME, SET_CURRENT_BEAT } from '../_constants/actionTypes';

export const startMetronome = (intervalID) => ({
    type: START_METRONOME,
    payload: intervalID
});

export const stopMetronome = (intervalID) => ({
    type: STOP_METRONOME,
    payload: intervalID
});

export const setCurrentBeat = (newBeat) => ({
    type: SET_CURRENT_BEAT,
    payload: newBeat
});