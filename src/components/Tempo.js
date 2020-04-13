import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getMetronomeTempo } from '../_selectors/metronomeSelectors';
import { setNewTempo } from '../_thunks/metronomeThunks';
import NumberInput from '../ui-components/NumberInput';


const Tempo = ({ tempo, onTempoChange }) =>
    <Fragment>
        <NumberInput type="number" min="40" max="240" value={tempo.toString()} onChange={(e) => onTempoChange(parseInt(e.target.value))} />
    </Fragment>

const mapStateToProps = state => ({
    tempo: getMetronomeTempo(state)
});

const mapDispatchToProps = dispatch => ({
    onTempoChange: (tempo) => dispatch(setNewTempo(tempo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tempo);