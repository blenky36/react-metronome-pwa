import { setCurrentBeat, stopMetronome, startMetronome, setTimeSignature, setTempo, setSound } from '../metronomeActions';
import { START_METRONOME, STOP_METRONOME, SET_CURRENT_BEAT, SET_TIME_SIGNATURE, SET_TEMPO, SET_SOUND} from '../../_constants/actionTypes';


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

    describe('The setTempo action', () => {
        it('Returns an object of type SET_TEMPO with payload of the correct tempo', () => {
            const expected = {
                type: SET_TEMPO,
                payload: 60
            };

            const actual = setTempo(60);

            expect(actual).toEqual(expected);
        });
    });

    describe('The setSound action', () => {
        it('Returns an object of type SET_SOUND with payload of the correct sound', () => {
            const expected = {
                type: SET_SOUND,
                payload: 'wood'
            };

            const actual = setSound('wood');

            expect(actual).toEqual(expected);
        });
    });
});