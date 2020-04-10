import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getBeatsPerBar, getBeatType } from '../_selectors/metronomeSelectors';
import { setTimeSignature } from '../_actions/metronomeActions';

const TimeSignature = ({ beatsPerBar, beatType, setNewTimeSignature }) => {

}

const mapStateToProps = state => ({
    beatsPerBar: getBeatsPerBar(state),
    beatType: getBeatType(state)
});

const mapDispatchToProps = dispatch => ({
    setNewTimeSignature: (beatsPerBar, beatType) => setTimeSignature(beatsPerBar, beatType)
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeSignature);