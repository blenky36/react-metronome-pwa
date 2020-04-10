import React, { useState, useEffect, Fragment } from 'react'
import BeatIndicatorList from './BeatIndicatorList';
import { setCurrentBeat, stopMetronome } from '../_actions/metronomeActions';
import { calculateNextBeat, startMetronomePlaying, stopMetronomePlaying } from '../_thunks/metronomeThunks';
import { connect } from 'react-redux';
import { getCurrentBeat, getFormattedTimeSignature, getMetronomePlaying, getMetronomeTickSpeed, getBeatsPerBar, getMetronomeIntervalID } from '../_selectors/metronomeSelectors';

export const renderButton = (playing, stopMetronome, startMetronome) => playing ? <button className="btn btn-danger" onClick={() => stopMetronome()}>Stop</button> : <button disabled={playing} onClick={() => startMetronome()} className="btn btn-success" >Start</button>

export const getBeatsPerMinute = (tickSpeed) => 60 / (tickSpeed / 1000);

const Metronome = ({ timeSignature, currentBeat, tickSpeed, playing, stopMetronome, startMetronome }) => {
    
    return (
        <Fragment>
            <BeatIndicatorList />
                Beat: {currentBeat} 
            <br />
                Time Signature: {timeSignature}
            <br />
            {getBeatsPerMinute(tickSpeed)} BPM
            {renderButton(playing, stopMetronome, startMetronome)}
        </Fragment>
    )
}

const mapStateToProps = state => ({
    currentBeat: getCurrentBeat(state),
    timeSignature: getFormattedTimeSignature(state),
    playing: getMetronomePlaying(state),
    tickSpeed: getMetronomeTickSpeed(state),
    beatsPerBar: getBeatsPerBar(state),
    intervalID: getMetronomeIntervalID(state)
});

const mapDispatchToProps = dispatch => ({
    setNewBeat: (currentBeat, beatsPerBar) => dispatch(calculateNextBeat(currentBeat, beatsPerBar)),
    startMetronome: (currentBeat, beatsPerBar, tickSpeed) => dispatch(startMetronomePlaying(tickSpeed, currentBeat, beatsPerBar)),
    stopMetronome: () => dispatch(stopMetronomePlaying()),
    resetCurrentBeat: () => dispatch(setCurrentBeat(1))
});

export default connect(mapStateToProps, mapDispatchToProps)(Metronome);