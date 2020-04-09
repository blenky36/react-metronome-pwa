import { metronomeReducer } from '../metronomeReducer';

const getFakeAction = (type, payload) => ({ type, payload }); 

describe('The metronome reducer', () => {
    it('Sets the current beat correctly when passed a new beat', () => {
        const fakeAction = getFakeAction('SET_CURRENT_BEAT', 2);
        const originalState = { currentBeat: 1 };

        const expected = { currentBeat: 2 };

        const actual = metronomeReducer(originalState, fakeAction);

        expect(actual).toEqual(expected);


    });
});