import {
    getBeatType,
    getBeatsPerBar,
    getMetronomePlaying,
    getFormattedTimeSignature,
    getTimeSignatureArray,
    getCurrentBeat,
    getMetronomeIntervalID,
    getMetronomeTempo,
    getMetromoneSound,
    getEmphasisedBeats
} from '../metronomeSelectors';

const fakeState = { metronomeReducer: { playing: true,  intervalID: null, timeSignature: [3, 4], currentBeat: 2, tempo: 40, sound: 'wood', emphasisedBeats: [4, 5]} }

describe('The metronome selectors', () => {
    describe('The get beat type selector', () => {
        it('Returns the beat type part of the time signature', () => {
            const fakeTimeSignature = [6, 8];

            const expected = 8;
            const actual = getBeatType.resultFunc(fakeTimeSignature);

            expect(actual).toEqual(expected);
        });
    });

    describe('The get beats per bar selector', () => {
        it('Returns the beats per bar part of the time signature', () => {
            const fakeTimeSignature = [6, 8];

            const expected = 6;
            const actual = getBeatsPerBar.resultFunc(fakeTimeSignature);

            expect(actual).toEqual(expected);
        });
    });

    describe('The get formatted time signature selector', () => {
        it('Returns the formatted time signature', () => {
            const fakeTimeSignature = [6, 8];

            const expected = '6/8';
            const actual = getFormattedTimeSignature.resultFunc(fakeTimeSignature);

            expect(actual).toEqual(expected);
        });
    });

    describe('The get metronome playing selector', () => {
        it('Returns true if the metronome is playing', () => {

            const expected = true;
            const actual = getMetronomePlaying(fakeState);

            expect(actual).toEqual(expected);
        });

        it('Returns false if the metronome is not playing', () => {
            const newFakeState = { metronomeReducer: { ...fakeState.metronomeReducer, playing: false } }
            const expected = false;
            const actual = getMetronomePlaying(newFakeState);

            expect(actual).toEqual(expected);
        });
    });

    describe('The get metronome intervalID selector', () => {
        it('Returns null when there is no metronome intervalID', () => {

            const expected = null;
            const actual = getMetronomeIntervalID(fakeState);

            expect(actual).toEqual(expected);
        });

        it('Returns the correct metronome intervalID', () => {
            const newFakeState = { metronomeReducer: { ...fakeState.metronomeReducer, intervalID: 4 } }
            const expected = 4;
            const actual = getMetronomeIntervalID(newFakeState);

            expect(actual).toEqual(expected);
        });
    });

    describe('The get time signature array selector', () => {
        it('Returns the time signature array', () => {

            const expected = [3, 4];
            const actual = getTimeSignatureArray(fakeState);

            expect(actual).toEqual(expected);
        });
    });

    describe('The get current beat selector', () => {
        it('Returns the current beat', () => {

            const expected = 2;
            const actual = getCurrentBeat(fakeState);

            expect(actual).toEqual(expected);
        });
    });

    describe('The get metronome tempo selector', () => {
        it('Returns the tempo', () => {

            const expected = 40;
            const actual = getMetronomeTempo(fakeState);

            expect(actual).toEqual(expected);
        });
    });

    describe('The get metronome sound selector', () => {
        it('Returns the sound', () => {

            const expected = 'wood';
            const actual = getMetromoneSound(fakeState);

            expect(actual).toEqual(expected);
        });
    });

    describe('The get emphasised beats selector', () => {
        it('Returns the emphasised beats', () => {

            const expected = [4, 5];
            const actual = getEmphasisedBeats(fakeState);

            expect(actual).toEqual(expected);
        });
    });
});