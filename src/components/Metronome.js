import React, { useState, useEffect, Fragment } from 'react'
import BeatIndicatorList from './BeatIndicatorList';
import wood from '../assets/audio/wood.wav'
import { connect } from 'react-redux';
import { getCurrentBeat, getFormattedTimeSignature, getMetronomePlaying, getMetronomeTickSpeed } from '../_selectors/metronomeSelectors';

export const renderButton = (playing, stopMetronome, startMetronome) => playing ? <button className="btn btn-danger" onClick={() => stopMetronome}>Stop</button> : <button disabled={playing} className="btn btn-success" onClick={() => startMetronome}>Play</button>
export const getBeatsPerMinute = (tickSpeed) => 60 / (tickSpeed / 1000);
// export const playSound = (t) => {
//     let clone = t.cloneNode();
//     clone.play();
// }

const Metronome = ({ timeSignature, currentBeat, playing, tickSpeed }) => {
    const [intervalID, setIntervalID] = useState(0);

    // const startMetronome = () => {
    //     let t = new Audio(wood);
    //     playSound(t);
    //     setInterval(() => {
    //         playSound(t);
    //     }, tickSpeed);
    // }

    const stopMetronome = () => {
        console.log('stop');
    }

    const startMetronome = () => {
        console.log('start');
    }

    return (
        <Fragment>
            <BeatIndicatorList />
                Beat: {currentBeat} 
            <br />
                Time Signature: {timeSignature}
            <br />
            {getBeatsPerMinute(tickSpeed)} BPM
            {renderButton(playing, startMetronome(), stopMetronome())}
        </Fragment>
    )
}

const mapStateToProps = state => ({
    currentBeat: getCurrentBeat(state),
    timeSignature: getFormattedTimeSignature(state),
    playing: getMetronomePlaying(state),
    tickSpeed: getMetronomeTickSpeed(state)
});

// const mapDispatchToProps = dispatch => ({
//     startLoadingTodos: () => dispatch(loadTodos()),
//     onRemovePressed: id => dispatch(removeTodoRequest(id)),
//     onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
// });

export default connect(mapStateToProps)(Metronome);