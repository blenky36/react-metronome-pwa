import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const BeatIndicatorContainer = styled.div`
    margin: 10px;
    textAlign: center;    
`;

export const getBeatIndicatorColor = (beatNo, currentBeat) => (beatNo === currentBeat) ? '#5AD7FA' : 'white';

const BeatIndicator = ({ beatNo, currentBeat }) => {
    return (
        <BeatIndicatorContainer>
            <FontAwesomeIcon icon={faCircle} color={getBeatIndicatorColor(beatNo, currentBeat)} />
        </BeatIndicatorContainer>
    )
}

export default BeatIndicator;

BeatIndicator.propTypes = {
    beatNo: PropTypes.number.isRequired,
    currentBeat: PropTypes.number.isRequired
}