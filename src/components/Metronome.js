import React, { useState, Fragment } from 'react'
import BeatIndicatorList from './BeatIndicatorList';
import { startMetronomePlaying, stopMetronomePlaying } from '../_thunks/metronomeThunks';
import { connect } from 'react-redux';
import TimeSignature from '../components/TimeSignature';
import Tempo from '../components/Tempo';
import ActionButton from '../ui-components/ActionButton';
import { getMetronomePlaying, getMetronomeTempo, getBeatsPerBar, getMetronomeIntervalID } from '../_selectors/metronomeSelectors';

export const renderButton = (playing, stopMetronome, startMetronome) => playing ? <ActionButton onClick={() => stopMetronome()}>Stop</ActionButton> : <ActionButton disabled={playing} onClick={() => startMetronome()} >Start</ActionButton>

const Metronome = ({ playing, stopMetronome, startMetronome }) => {
    return (
        <Fragment>
            <BeatIndicatorList />
            <TimeSignature />
            <Tempo />
            {renderButton(playing, stopMetronome, startMetronome)}
        </Fragment>
    )
}

const mapStateToProps = state => ({
    playing: getMetronomePlaying(state),
    tempo: getMetronomeTempo(state),
    beatsPerBar: getBeatsPerBar(state),
    intervalID: getMetronomeIntervalID(state)
});

const mapDispatchToProps = dispatch => ({
    startMetronome: () => dispatch(startMetronomePlaying()),
    stopMetronome: () => dispatch(stopMetronomePlaying()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Metronome);