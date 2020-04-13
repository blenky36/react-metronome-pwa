import { metronomeReducer } from '../metronomeReducer';

const getFakeAction = (type, payload) => ({ type, payload }); 

describe('The metronome reducer', () => {
    it('Sets the current beat correctly when passed SET_CURRENT_BEAT', () => {
        const fakeAction = getFakeAction('SET_CURRENT_BEAT', 2);
        const originalState = { currentBeat: 1 };

        const expected = { currentBeat: 2 };

        const actual = metronomeReducer(originalState, fakeAction);

        expect(actual).toEqual(expected);

    });

    it('Sets playing to true and the intervalID correctly when passed START_METRONOME', () => {
        const fakeAction = getFakeAction('START_METRONOME', 2);
        const originalState = { playing: false, intervalID: null };

        const expected = { playing: true, intervalID: 2 };

        const actual = metronomeReducer(originalState, fakeAction);

        expect(actual).toEqual(expected);

    });

    it('Sets playing to false and the intervalID to null and current beat to 0 when passed STOP_METRONOME', () => {
        const fakeAction = getFakeAction('STOP_METRONOME');
        const originalState = { playing: true, intervalID: 10, currentBeat: 3 };

        const expected = { playing: false, intervalID: null, currentBeat: 0 };

        const actual = metronomeReducer(originalState, fakeAction);

        expect(actual).toEqual(expected);

    });

    it('Sets the time signature correctly when passed SET_TIME_SIGNATURE', () => {
        const fakeAction = getFakeAction('SET_TIME_SIGNATURE', [2, 8]);
        const originalState = { timeSignature: [4, 5] };

        const expected = { timeSignature: [2, 8] };

        const actual = metronomeReducer(originalState, fakeAction);

        expect(actual).toEqual(expected);

    });

    it('Sets the tempo correctly when passed SET_TEMPO action', () => {
        const fakeAction = getFakeAction('SET_TEMPO', 40);
        const originalState = { tempo: 50 };

        const expected = { tempo: 40 };

        const actual = metronomeReducer(originalState, fakeAction);

        expect(actual).toEqual(expected);

    });

    it('Sets the sound correctly when passed SET_SOUND action', () => {
        const fakeAction = getFakeAction('SET_SOUND', 'drumstick');
        const originalState = { sound: 'wood' };

        const expected = { sound: 'drumstick' };

        const actual = metronomeReducer(originalState, fakeAction);

        expect(actual).toEqual(expected);

    });

});