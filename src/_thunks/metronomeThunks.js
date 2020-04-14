import  { soundCst } from '../_constants/sounds';
import { setCurrentBeat, startMetronome, stopMetronome, setTempo, addEmphasisedBeat, removeEmphasisedBeat } from '../_actions/metronomeActions'
import { getCurrentBeat, getBeatsPerBar, getMetronomeTempo, getMetronomeIntervalID, getMetronomePlaying, getMetromoneSound, getEmphasisedBeats } from '../_selectors/metronomeSelectors';

export const calculateNextBeat = (currentBeat, beatsPerBar) => dispatch => {
    if(currentBeat < beatsPerBar) {
        dispatch(setCurrentBeat(currentBeat + 1));
    } else {
        dispatch(setCurrentBeat(1));
    }
}

export const addRemoveEmphasisedBeat = (beatNo) => (dispatch, getState) => {
    const emphasisedBeats = getEmphasisedBeats(getState());
    if(emphasisedBeats.includes(beatNo)) {
        dispatch(removeEmphasisedBeat(beatNo));
    } else {
        dispatch(addEmphasisedBeat(beatNo));
    }
}

export const startMetronomePlaying = () => (dispatch, getState) => {
    let tempo = getMetronomeTempo(getState());
    let tickSpeed = convertTempoToMilliseconds(tempo);
    let intervalID = getMetronomeIntervalID(getState());
    clearInterval(intervalID);
    
    const interval = setInterval(() => {
        let sound = '';
        let currentBeat = getCurrentBeat(getState());
        let beatsPerBar = getBeatsPerBar(getState());
        let emphasisedBeats = getEmphasisedBeats(getState());
        if(emphasisedBeats.includes(currentBeat)) {
            sound = 'woodHigh';
        } else {
            sound = getMetromoneSound(getState());
        }
        playSound(sound);
        dispatch(calculateNextBeat(currentBeat, beatsPerBar));
    }, tickSpeed);

    dispatch(startMetronome(interval));
}

export const stopMetronomePlaying = () => (dispatch, getState) => {
    let intervalID = getMetronomeIntervalID(getState());
    clearInterval(intervalID);
    dispatch(stopMetronome());
}

export const setNewTempo = (tempo) => (dispatch, getState) => {
    const playing = getMetronomePlaying(getState());
    if(playing) {
        dispatch(stopMetronomePlaying());
        dispatch(setTempo(tempo));
        dispatch(startMetronomePlaying());
    } else {
        dispatch(setTempo(tempo));
    }
}  

const playSound = (name) => {
    let sound = new Audio(soundCst[name]);
    sound.play();
}   

export const convertTempoToMilliseconds = (tempo) => (60 / tempo) * 1000;