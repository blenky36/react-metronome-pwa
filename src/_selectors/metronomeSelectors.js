import { createSelector } from 'reselect';

export const getMetronomePlaying = state => state.playing;
export const getMetronomeInterval = state => state.intervalID;
export const getTimeSignature = state => state.timeSignature;
export const getCurrentBeat = state => state.currentBeat;


export const getBeatsPerBar = createSelector(
    getTimeSignature,
    (signature) => signature[0]
);

export const getBeatType = createSelector(
    getTimeSignature,
    (signature) => signature[1]
);
