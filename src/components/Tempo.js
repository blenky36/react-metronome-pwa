import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getMetronomeTempo } from '../_selectors/metronomeSelectors';
import { setTempo } from '../_actions/metronomeActions';
import NumberInput from '../ui-components/NumberInput';


const Tempo = ({ tempo, setNewTempo }) =>
    <Fragment>
        <NumberInput type="number" min="40" max="240" value={tempo.toString()} onChange={(e) => setNewTempo(parseInt(e.target.value))} />
    </Fragment>

const mapStateToProps = state => ({
    tempo: getMetronomeTempo(state)
});

const mapDispatchToProps = dispatch => ({
    setNewTempo: (tempo) => dispatch(setTempo(tempo))
});

export default connect(mapStateToProps, mapDispatchToProps)(Tempo);