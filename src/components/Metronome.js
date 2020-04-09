import React, { useState, useEffect, Fragment } from 'react'
import BeatIndicatorList from './BeatIndicatorList';
import wood from '../assets/audio/wood.wav';
import { setCurrentBeat } from '../_actions/metronomeActions';
import { calculateNextBeat } from '../_thunks/metronomeThunks';
import { connect } from 'react-redux';
import { getCurrentBeat, getFormattedTimeSignature, getMetronomePlaying, getMetronomeTickSpeed, getBeatsPerBar } from '../_selectors/metronomeSelectors';

export const renderButton = (playing, stopMetronome, startMetronome) => playing ? <button className="btn btn-danger" onClick={() => stopMetronome}>Stop</button> : <button disabled={playing} className="btn btn-success" onClick={() => startMetronome}>Play</button>
export const getBeatsPerMinute = (tickSpeed) => 60 / (tickSpeed / 1000);
// export const playSound = (t) => {
//     let clone = t.cloneNode();
//     clone.play();
// }

export const stopMetronome = () => {
    console.log('stop');
}

export const startMetronome = () => {
    console.log('start');
}

const Metronome = ({ timeSignature, currentBeat, playing, tickSpeed, setNewBeat, beatsPerBar, resetCurrentBeat }) => {
    const [intervalID, setIntervalID] = useState(0);

    // const startMetronome = () => {
    //     let t = new Audio(wood);
    //     playSound(t);
    //     setInterval(() => {
    //         playSound(t);
    //     }, tickSpeed);
    // }

    
    return (
        <Fragment>
            <BeatIndicatorList />
                Beat: {currentBeat} 
            <br />
                Time Signature: {timeSignature}
            <br />
            {getBeatsPerMinute(tickSpeed)} BPM
            {/* {renderButton(playing, startMetronome(), stopMetronome())} */}
            <button className="btn btn-primary" onClick={() => setNewBeat(currentBeat, beatsPerBar)}>Start</button> &nbsp;
            <button className="btn btn-warning" onClick={() => resetCurrentBeat()}>Reset</button>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    currentBeat: getCurrentBeat(state),
    timeSignature: getFormattedTimeSignature(state),
    playing: getMetronomePlaying(state),
    tickSpeed: getMetronomeTickSpeed(state),
    beatsPerBar: getBeatsPerBar(state)
});

const mapDispatchToProps = dispatch => ({
    setNewBeat: (currentBeat, beatsPerBar) => dispatch(calculateNextBeat(currentBeat, beatsPerBar)),
    resetCurrentBeat: () => dispatch(setCurrentBeat(1))
});

export default connect(mapStateToProps, mapDispatchToProps)(Metronome);