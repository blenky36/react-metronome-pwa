import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getFormattedTimeSignature } from '../_selectors/metronomeSelectors';

const TimeSignature = () => {

}

const mapStateToProps = state => ({
    timeSignature: getFormattedTimeSignature(state),
});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeSignature);