import * as React from 'react';
import Metronome from './components/Metronome';
import styled from 'styled-components'

const AppContainer = styled.div`
    text-align: center;
`;

const AppHeader = styled.header`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

const App = () => (
    <AppContainer>
        <AppHeader>
            <Metronome />
        </AppHeader>
    </AppContainer>
);


export default App;
