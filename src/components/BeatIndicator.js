import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { getMetronomePlaying } from '../_selectors/metronomeSelectors';
import { addRemoveEmphasisedBeat } from '../_thunks/metronomeThunks';

const BeatIndicatorContainer = styled.div`
    margin: 10px;
    textAlign: center; 
    border-radius: 8px;  
    padding: 0px 5px;
    cursor: pointer;
    &:hover {
        background-color: rgba(184, 240, 255, 0.5);
    }
    &:focus {
        outline: none;
    }
    border: ${props => props.emphasised ? '2px solid #5AD7FA' : '2px solid #ffffff00'};
`;


export const getBeatIndicatorColor = (beatNo, currentBeat, playing) => (beatNo === currentBeat) ? '#5AD7FA' : (playing ? 'white' : '#5AD7FA');

const BeatIndicator = ({ beatNo, currentBeat, playing, emphasised, onIndicatorClicked }) => {
    return (
        <BeatIndicatorContainer emphasised={emphasised} onClick={() => onIndicatorClicked(beatNo)}>
            <FontAwesomeIcon icon={faCircle} color={getBeatIndicatorColor(beatNo, currentBeat, playing)} />
        </BeatIndicatorContainer>
    )
}

const mapStateToProps = (state) => ({
    playing: getMetronomePlaying(state)
});

const mapDispatchToProps = dispatch => ({
    onIndicatorClicked: (beatNo) => dispatch(addRemoveEmphasisedBeat(beatNo))
});

export default connect(mapStateToProps, mapDispatchToProps)(BeatIndicator);

BeatIndicator.propTypes = {
    beatNo: PropTypes.number.isRequired,
    currentBeat: PropTypes.number.isRequired,
    emphasised: PropTypes.bool.isRequired
}