import React, { useState, useEffect } from 'react';
import Metronome from './components/Metronome';
import './App.css';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <Metronome/>
            </header>
        </div>
    );
}

export default App;
