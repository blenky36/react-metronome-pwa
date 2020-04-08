import React, { useState, useEffect } from 'react';
import wood from './audio/wood.wav';
import drumstick from './audio/drumstick.wav';
import BeatIndicators from './components/BeatIndicators';
import './App.css';

function App() {
    const [seconds, setSeconds] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [intervalID, setIntervalID] = useState(0);
    const [tickSpeed, setTickSpeed] = useState(500);
    const [currentBeat, setCurrentBeat] = useState(0);
    const [timeSignature, setTimeSignature] = useState([4, 4]);

    const startMetronome = () => {
        let t = new Audio(wood);
        setPlaying(true);
        setSeconds(1);
        setCurrentBeat(1);
        playSound(t);
        setIntervalID(setInterval(() => {
            playSound(t);
            setSeconds(seconds => seconds + 1);
            getCurrentBeat();
        }, tickSpeed));
    }

    const stopMetronome = () => {
        clearInterval(intervalID);
        setPlaying(false);
    }

    const getCurrentBeat = () => {
        if(currentBeat === 4) {
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


    return (
        <div className="App">
            <header className="App-header">
                <BeatIndicators amount={timeSignature[0]} beat={currentBeat} />
                Beat: {currentBeat}
                <br />
                Time Signature: {timeSignature[0]}/{timeSignature[1]}
                <br />
                {getBeatsPerMinute()} BPM
                {playing ? <button className="btn btn-danger" onClick={() => stopMetronome()}>Stop</button> : <button disabled={playing} className="btn btn-success" onClick={() => startMetronome()}>Play</button>}
            </header>
        </div>
    );
}

export default App;
