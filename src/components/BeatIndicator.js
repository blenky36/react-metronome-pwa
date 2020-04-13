import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { getMetronomePlaying } from '../_selectors/metronomeSelectors';

const BeatIndicatorContainer = styled.div`
    margin: 10px;
    textAlign: center;    
`;

export const getBeatIndicatorColor = (beatNo, currentBeat, playing) => (beatNo === currentBeat) ? '#5AD7FA' : (playing ? 'white' : '#5AD7FA');

const BeatIndicator = ({ beatNo, currentBeat, playing }) => {
    return (
        <BeatIndicatorContainer>
            <FontAwesomeIcon icon={faCircle} color={getBeatIndicatorColor(beatNo, currentBeat, playing)} />
        </BeatIndicatorContainer>
    )
}

const mapStateToProps = (state) => ({
    playing: getMetronomePlaying(state)
});

export default connect(mapStateToProps)(BeatIndicator);

BeatIndicator.propTypes = {
    beatNo: PropTypes.number.isRequired,
    currentBeat: PropTypes.number.isRequired
}