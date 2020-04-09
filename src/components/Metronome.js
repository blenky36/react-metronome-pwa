import React, { useState, useEffect, Fragment } from 'react'
import BeatIndicatorList from './BeatIndicatorList';
import wood from '../audio/wood.wav';

const Metronome = () => {
    const [playing, setPlaying] = useState(false);
    const [intervalID, setIntervalID] = useState(0);
    const [tickSpeed, setTickSpeed] = useState(500);
    const [currentBeat, setCurrentBeat] = useState(0);
    const [timeSignature, setTimeSignature] = useState([4, 4]);

    const startMetronome = () => {
        let t = new Audio(wood);
        setPlaying(true);
        setCurrentBeat(1);
        playSound(t);
        setIntervalID(setInterval(() => {
            playSound(t);
            getCurrentBeat();
        }, tickSpeed));
    }

    const stopMetronome = () => {
        clearInterval(intervalID);
        setPlaying(false);
    }

    const getCurrentBeat = () => {
        if (currentBeat === 4) {
            setCurrentBeat(1);
        } else {
            setCurrentBeat(currentBeat => currentBeat + 1)
        }
    }

    const getBeatsPerMinute = () => 60 / (tickSpeed / 1000)

    const playSound = (t) => {
        let clone = t.cloneNode();
        clone.play();
    }

    const renderButton = () => playing ? <button className="btn btn-danger" onClick={() => stopMetronome()}>Stop</button> : <button disabled={playing} className="btn btn-success" onClick={() => startMetronome()}>Play</button>

    return (
        <Fragment>
            <BeatIndicators amount={timeSignature[0]} beat={currentBeat} />
                Beat: {currentBeat}
            <br />
                Time Signature: {timeSignature[0]}/{timeSignature[1]}
            <br />
            {getBeatsPerMinute()} BPM
            {renderButton()}
        </Fragment>
    )
}

export default Metronome