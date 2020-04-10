import { setCurrentBeat, stopMetronome, startMetronome, setTimeSignature } from '../metronomeActions';
import { START_METRONOME, STOP_METRONOME, SET_CURRENT_BEAT, SET_TIME_SIGNATURE } from '../../_constants/actionTypes';


describe('The metronome actions', () => {
    describe('The startMetronome action', () => {
        it('Returns an object of type START_METRONOME with payload of the correct intervalID', () => {
            const expected = {
                type: START_METRONOME,
                payload: 1
            };

            const actual = startMetronome(1);

            expect(actual).toEqual(expected);
        });
    });

    describe('The stopMetronome action', () => {
        it('Returns an object of type STOP_METRONOME', () => {
            const expected = {
                type: STOP_METRONOME,
            };

            const actual = stopMetronome(1);

            expect(actual).toEqual(expected);
        });
    });

    describe('The setCurrentBeat action', () => {
        it('Returns an object of type SET_CURRENT_BEAT with payload of the correct beat', () => {
            const expected = {
                type: SET_CURRENT_BEAT,
                payload: 2
            };

            const actual = setCurrentBeat(2);

            expect(actual).toEqual(expected);
        });
    });

    describe('The setTimeSignature action', () => {
        it('Returns an object of type SET_TIME_SIGNATURE with payload of the correct time signature', () => {
            const expected = {
                type: SET_TIME_SIGNATURE,
                payload: [6, 8]
            };

            const actual = setTimeSignature(6, 8);

            expect(actual).toEqual(expected);
        });
    });
});