import { START_METRONOME, STOP_METRONOME, SET_CURRENT_BEAT, SET_TIME_SIGNATURE, SET_TEMPO, SET_SOUND, ADD_EMPHASISED_BEAT, REMOVE_EMPHASISED_BEAT } from '../_constants/actionTypes';

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
});

export const setSound = (sound) => ({
    type: SET_SOUND,
    payload: sound
});

export const addEmphasisedBeat = (beatNumber) => ({
    type: ADD_EMPHASISED_BEAT,
    payload: beatNumber
});

export const removeEmphasisedBeat = (beatNumber) => ({
    type: REMOVE_EMPHASISED_BEAT,
    payload: beatNumber
});