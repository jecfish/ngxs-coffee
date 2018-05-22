import {
    NextRunningNo
} from './remix.actions';
import { remixReducer } from './remix.reducer';
import { remixInitialState } from './remix.init';

describe('Remix Reducer', () => {
    describe('NEXT_RUNNING_NO', () => {
        it('should increase runnning no', () => {
            // arrange
            const currentState = {
                ...remixInitialState,
                runningNo: 4
            };

            const expectedState = {
                ...remixInitialState,
                runningNo: 5
            };

            // action
            const action = new NextRunningNo();
            const actual = remixReducer(currentState, action);

            // assert
            expect(actual).toEqual(expectedState);
        });
    });
});
