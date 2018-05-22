import { State, StateContext, Action } from '@ngxs/store';
import { NextRunningNo } from './remix.actions';

export const getRemixInitialState = (): Remix => ({
    runningNo: 1
});

@State<Remix>({
    name: 'remix',
    defaults: {
        runningNo: 1
    }
})
export class RemixState {
    @Action(NextRunningNo)
    nextRunningNo(ctx: StateContext<Remix>, action: NextRunningNo) {
        const state = ctx.getState();

        const current = {
            runningNo: state.runningNo + 1
        };

        ctx.setState({
            ...state,
            ...current
        });
    }
}
