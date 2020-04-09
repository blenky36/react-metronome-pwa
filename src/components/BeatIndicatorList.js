import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BeatIndicator from './BeatIndicator';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { getCurrentBeat, getBeatsPerBar } from '../_selectors/metronomeSelectors';

const BeatIndicatorListContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;    
`;

export const createIndicatorList = (beatsPerBar, currentBeat) => {
    let indicatorList = [];
    for (let i = 1; i = beatsPerBar; i++) {
        indicatorList.push(<BeatIndicator beatNo={i} currentBeat={currentBeat} />)
    };
    return indicatorList;
}

const BeatIndicatorList = ({ beatsPerBar, currentBeat }) => {

    useEffect(() => renderIndicators(), []); // componentDidMount

    useEffect(() => renderIndicators(), [beatsPerBar, currentBeat]); // componentDidMount

    return (
        <BeatIndicatorListContainer>
            {createIndicatorList(beatsPerBar, currentBeat)}
        </BeatIndicatorListContainer>
    )
}

BeatIndicators.propTypes = {
    beatsPerBar: PropTypes.number.isRequired,
    currentBeat: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    currentBeat: getCurrentBeat(state),
    beatsPerBar: getBeatsPerBar(state),
});

// const mapDispatchToProps = dispatch => ({
//     startLoadingTodos: () => dispatch(loadTodos()),
//     onRemovePressed: id => dispatch(removeTodoRequest(id)),
//     onCompletedPressed: id => dispatch(markTodoAsCompletedRequest(id)),
// });

export default connect(mapStateToProps)(BeatIndicatorList);