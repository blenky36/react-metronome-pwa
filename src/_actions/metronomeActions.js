import { START_METRONOME, STOP_METRONOME, SET_CURRENT_BEAT, SET_TIME_SIGNATURE, SET_TEMPO } from '../_constants/actionTypes';

export const startMetronome = (intervalID) => ({
    type: START_METRONOME,
    payload: intervalID
});

export const stopMetronome = () => ({
    type: STOP_METRONOME
});

export const setCurrentBeat = (newBeat) => ({
    type: SET_CURRENT_BEAT,
    payload: newBeat
});

export const setTimeSignature = (beatsPerBar, beatType) => ({
    type: SET_TIME_SIGNATURE,
    payload: [beatsPerBar, beatType]
});

export const setTempo = (tempo) => ({
    type: SET_TEMPO,
    payload: tempo
})