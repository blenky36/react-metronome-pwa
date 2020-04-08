import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { usePrevious } from '../helpers/commonService';

const BeatIndicators = ({ amount, beat }) => {
    const [indicators, setIndicators] = useState([]);
    const getIconColor = (index) => (index + 1 === beat) ? 'red' : 'green';

    const renderIndicators = () => {
        let tmpIndicators = [];
        for (let i = 0; i < amount; i++) {
            tmpIndicators.push(<div key={i} style={{ margin: 10, textAlign: 'center' }}><FontAwesomeIcon icon={faCircle} color={getIconColor(i)} /></div>)
        };
        setIndicators(tmpIndicators);
    }

    useEffect(() => renderIndicators(), []); // componentDidMount

    useEffect(() => renderIndicators(), [amount, beat]); // componentDidMount

    
    return (
        <div style={{ display: 'flex', flexWrap: 'nowrap' }} >
            {indicators}
        </div>
    )
}

BeatIndicators.propTypes = {
    amount: PropTypes.number.isRequired,
    beat: PropTypes.number.isRequired
};

export default BeatIndicators;