import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getMetronomeTempo } from '../_selectors/metronomeSelectors';
import { setTempo } from '../_actions/metronomeActions';
import styled from 'styled-components';


const TempoInput = styled.input`
    border-radius: 8px;
    text-align: center;
    padding: 2px;
    margin-bottom: 5px;
`;


const Tempo = ({ tempo, setNewTempo }) =>
    <Fragment>
        <TempoInput type="number" min="40" max="240" value={tempo.toString()} onChange={(e) => setNewTempo(parseInt(e.target.value))} /> BPM
    </Fragment>

const mapStateToProps = state => ({
    tempo: getMetronomeTempo(state)
});

const mapDispatchToProps = dispatch => ({
    setNewTempo: (tempo) => dispatch(setTempo(tempo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tempo);