import { createSelector } from 'reselect';

export const getMetronomePlaying = state => state.metronomeReducer.playing;
export const getMetronomeIntervalID = state => state.metronomeReducer.intervalID;
export const getTimeSignatureArray = state => state.metronomeReducer.timeSignature;
export const getCurrentBeat = state => state.metronomeReducer.currentBeat;
export const getMetronomeTempo = state => state.metronomeReducer.tempo;
export const getMetromoneSound = state => state.metronomeReducer.sound;
export const getEmphasisedBeats = state => state.metronomeReducer.emphasisedBeats;


export const getBeatsPerBar = createSelector(
    getTimeSignatureArray,
    (signature) => signature[0]
);

export const getBeatType = createSelector(
    getTimeSignatureArray,
    (signature) => signature[1]
);

export const getFormattedTimeSignature = createSelector(
    getTimeSignatureArray,
    (tsArray) => `${tsArray[0]}/${tsArray[1]}`
)
