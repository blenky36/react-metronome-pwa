import { calculateNextBeat, convertTempoToMilliseconds } from '../metronomeThunks';
import sinon from 'sinon';

describe('The metronome thunks', () => {
    describe('The calculate next beat thunk', () => {
        it('Increments the beat when the current beat is less than the beats per bar', () => {
            const fakeDispatch = sinon.spy();
            const fakeCurrentBeat = 2;
            const fakeBeatsPerBar = 4;
            const expectedFirstAction = {
                type: 'SET_CURRENT_BEAT',
                payload: 3
            };

            calculateNextBeat(fakeCurrentBeat, fakeBeatsPerBar)(fakeDispatch);

            expect(fakeDispatch.getCall(0).args[0]).toEqual(expectedFirstAction);
        });

        it('Rests the beat when the current beat is equal to the beats per bar', () => {
            const fakeDispatch = sinon.spy();
            const fakeCurrentBeat = 4;
            const fakeBeatsPerBar = 4;
            const expectedFirstAction = {
                type: 'SET_CURRENT_BEAT',
                payload: 1
            };

            calculateNextBeat(fakeCurrentBeat, fakeBeatsPerBar)(fakeDispatch);

            expect(fakeDispatch.getCall(0).args[0]).toEqual(expectedFirstAction);
        });
    });
});

describe('ConvertTempoToMilliseconds', () => {
    it('returns 1000 when passed a tempo of 60', () => {
        const expected = 1000;
        const actual = convertTempoToMilliseconds(60);

        expect(actual).toEqual(expected);
    });
    
    it('returns 500 when passed a tempo of 120', () => {
        const expected = 500;
        const actual = convertTempoToMilliseconds(120);
        
        expect(actual).toEqual(expected);
    })
});