import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import BeatIndicator from './BeatIndicator';
import ItemListContainer from '../ui-components/ItemListContainer';
import { connect } from 'react-redux';
import { getCurrentBeat, getBeatsPerBar } from '../_selectors/metronomeSelectors';



export const createIndicatorList = (beatsPerBar, currentBeat) => {
    let indicatorList = [];
    for (let i = 1; i <= beatsPerBar; i++) {
        indicatorList.push(<BeatIndicator key={i} beatNo={i} currentBeat={currentBeat} />)
    };
    return indicatorList;
}

const BeatIndicatorList = ({ beatsPerBar, currentBeat }) => {

    return (
        <ItemListContainer>
            {createIndicatorList(beatsPerBar, currentBeat)}
        </ItemListContainer>
    )
}

BeatIndicatorList.propTypes = {
    beatsPerBar: PropTypes.number.isRequired,
    currentBeat: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    currentBeat: getCurrentBeat(state),
    beatsPerBar: getBeatsPerBar(state),
});

export default connect(mapStateToProps)(BeatIndicatorList);