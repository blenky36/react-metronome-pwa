import React, { useState, useEffect } from 'react';
import wood from './audio/wood.wav';
import drumstick from './audio/drumstick.wav';
import './App.css';

function App() {
    const [seconds, setSeconds] = useState(0);
    const [playing, setPlaying] = useState(false);
    const [intervalID, setIntervalID] = useState(0);
    const [tickSpeed, setTickSpeed] = useState(500);

    const startMetronome = () => {
        let t = new Audio(wood);
        setPlaying(true);
        playSound(t);
        setIntervalID(setInterval(() => {
            playSound(t);
            setSeconds(seconds => seconds + 1);
        }, tickSpeed));
    }

    const stopMetronome = () => {
        clearInterval(intervalID);
        setPlaying(false);
    }

    const getBeatsPerMinute = () => 60 / (tickSpeed / 1000)
    const playSound = (t) => {
        let clone = t.cloneNode();
        clone.play();
    }


    return (
        <div className="App">
            <header className="App-header">
                {seconds} seconds have elapsed since mounting.
                <br/>
                {getBeatsPerMinute()} BPM
                {playing ? <button className="btn btn-danger" onClick={() => stopMetronome()}>Stop</button> : <button disabled={playing} className="btn btn-success" onClick={() => startMetronome('drumstick')}>Play</button>}
                
                {/* <audio id={'wood'} src={wood} type="audio/wav" ></audio> */}
                {/* <audio id={'drumstick'} src={drumstick} type="audio/wav" ></audio> */}
            </header>
        </div>
    );
}

export default App;
