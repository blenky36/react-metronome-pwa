import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getBeatsPerBar, getBeatType } from '../_selectors/metronomeSelectors';
import { setTimeSignature } from '../_actions/metronomeActions';
import styled from 'styled-components';


const TimeSignatureInput = styled.input`
    border-radius: 8px;
    text-align: center;
    padding: 2px;
    margin-bottom: 5px;
`;


const TimeSignature = ({ beatsPerBar, beatType, setNewTimeSignature }) => {

    return (
        <Fragment>
            <TimeSignatureInput type="number" min="1" max="12" maxLength="2" minLength="1" value={beatsPerBar.toString()} onChange={(e => setNewTimeSignature(parseInt(e.target.value), beatType))}/>
            <TimeSignatureInput type="number" min="1" max="12" maxLength="2" minLength="1" value={beatType.toString()} onChange={(e => setNewTimeSignature(beatsPerBar, parseInt(e.target.value)))}/>
        </Fragment>
    )
}

const mapStateToProps = state => ({
    beatsPerBar: getBeatsPerBar(state),
    beatType: getBeatType(state)
});

const mapDispatchToProps = dispatch => ({
    setNewTimeSignature: (beatsPerBar, beatType) => dispatch(setTimeSignature(beatsPerBar, beatType))
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeSignature);