import { soundCst } from '../_constants/sounds';
import { setCurrentBeat, startMetronome, stopMetronome, setTempo, addEmphasisedBeat, removeEmphasisedBeat } from '../_actions/metronomeActions'
import { getCurrentBeat, getBeatsPerBar, getMetronomeTempo, getMetronomeIntervalID, getMetronomePlaying, getMetromoneSound, getEmphasisedBeats } from '../_selectors/metronomeSelectors';

export const calculateNextBeat = (currentBeat, beatsPerBar) => dispatch => {
    if (currentBeat < beatsPerBar) {
        dispatch(setCurrentBeat(currentBeat + 1));
    } else {
        dispatch(setCurrentBeat(1));
    }
}

export const addRemoveEmphasisedBeat = (beatNo) => (dispatch, getState) => {
    const emphasisedBeats = getEmphasisedBeats(getState());
    if (emphasisedBeats.includes(beatNo)) {
        dispatch(removeEmphasisedBeat(beatNo));
    } else {
        dispatch(addEmphasisedBeat(beatNo));
    }
}

export const startMetronomePlaying = () => (dispatch, getState) => {
    const tempo = getMetronomeTempo(getState());

    clearCurrentInterval(getState());

    playSound(getState(), 1);
    dispatch(setCurrentBeat(1));
    
    const interval = setInterval(() => {
        let currentBeat = getCurrentBeat(getState());
        let beatsPerBar = getBeatsPerBar(getState());
        dispatch(calculateNextBeat(currentBeat, beatsPerBar));

        let newBeat = getCurrentBeat(getState());
        playSound(getState(), newBeat);
    }, convertTempoToMilliseconds(tempo));


    dispatch(startMetronome(interval));
}

export const stopMetronomePlaying = () => (dispatch, getState) => {
    let intervalID = getMetronomeIntervalID(getState());
    clearInterval(intervalID);
    dispatch(stopMetronome());
}

export const setNewTempo = (tempo) => (dispatch, getState) => {
    const playing = getMetronomePlaying(getState());
    if (playing) {
        dispatch(stopMetronomePlaying());
        dispatch(setTempo(tempo));
        dispatch(startMetronomePlaying());
    } else {
        dispatch(setTempo(tempo));
    }
}

export const playSoundFile = (name) => {
    let sound = new Audio(soundCst[name]);
    sound.play();
}

export const clearCurrentInterval = (state) => {
    let intervalID = getMetronomeIntervalID(state);
    clearInterval(intervalID);
}

export const playSound = (state, beat) => {
    if(getEmphasisedBeats(state).includes(beat)) {
        playSoundFile('woodHigh');
    } else {
        playSoundFile(getMetromoneSound(state))
    }
}

export const convertTempoToMilliseconds = (tempo) => (60 / tempo) * 1000;