import * as React from 'react';
import { connect } from 'react-redux';
import { getMetromoneSound } from '../_selectors/metronomeSelectors';
import ItemListContainer from '../ui-components/ItemListContainer';
import ActionButton from '../ui-components/ActionButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setSound } from '../_actions/metronomeActions';
import { faDrum, faDrumSteelpan } from '@fortawesome/free-solid-svg-icons'

const SoundSelector = ({ sound, onSoundClicked }) => {
    return (
        <ItemListContainer>
            <ActionButton onClick={() => onSoundClicked('drumstick')} ><FontAwesomeIcon color={sound === 'drumstick' ? '#5AD7FA' : 'white'} icon={faDrum} ></FontAwesomeIcon></ActionButton>
            <ActionButton onClick={() => onSoundClicked('woodLow')} ><FontAwesomeIcon color={sound === 'woodLow' ? '#5AD7FA' : 'white'} icon={faDrumSteelpan} ></FontAwesomeIcon></ActionButton>
        </ItemListContainer>
    );
}

const mapStateToProps = state => ({
    sound: getMetromoneSound(state)
});

const mapDispatchToProps = dispatch => ({
    onSoundClicked: (sound) => dispatch(setSound(sound))
})

export default connect(mapStateToProps, mapDispatchToProps)(SoundSelector);