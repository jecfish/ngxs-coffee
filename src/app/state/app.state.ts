import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Receiver, EmitterAction } from '@ngxs-labs/emitter';


import {
    AddToCart,
    GetCoffeeList,
    AddOneCartItem
} from './app.actions';

import { CoffeeService } from '../services/coffee.service';

export const getAppInitialState = (): App => ({
    coffeeList: [],
    cart: []
});

@State<App>({
    name: 'app',
    defaults: getAppInitialState()
})
export class AppState {
    constructor(private coffeeSvc: CoffeeService) { }

    @Selector()
    static coffeeList(state: App) {
        return state.coffeeList;
    }

    @Selector()
    static totalCartAmount(state: App) {
        const priceList = state.cart
            .map(c => {
                const unitPrice = state.coffeeList.find(x => x.name === c.name).price;
                return unitPrice * c.quantity;
            })
        const sum = priceList.reduce((acc, curr) => acc + curr, 0);

        return sum;
    }

    @Action(GetCoffeeList)
    async getCoffeeList(ctx: StateContext<App>, action: EmitterAction<Coffee[]>) {

        const coffeeList = await this.coffeeSvc.getList();

        const state = ctx.getState();

        ctx.setState({
            ...state,
            coffeeList
        });

    }

    @Receiver()
    static addToCart(ctx: StateContext<App>, action: EmitterAction<string>) {
        const state = ctx.getState();

        // find cart item by item name
        const { quantity = 0 } = state.cart.find(x => x.name === action.payload) || {};

        const current = {
            cart: [
                ...state.cart.filter(x => x.name !== action.payload),
                {
                    name: action.payload, quantity: quantity + 1
                }
            ]
        };

        ctx.setState({
            ...state,
            ...current
        });
    }

    @Receiver()
    static addOneCartItem(ctx: StateContext<App>, action: EmitterAction<string>) {
        this.addToCart(ctx, action);
    }

    @Receiver()
    static removeCartItem(ctx: StateContext<App>, action: EmitterAction<string>) {
        const state = ctx.getState();

        const current = {
            cart: [...state.cart.filter(x => x.name !== action.payload)]
        };

        ctx.setState({
            ...state,
            ...current
        });
    }

    @Receiver()
    static removeOneCartItem(ctx: StateContext<App>, action: EmitterAction<string>) {
        const state = ctx.getState();

        const item = state.cart.find(x => x.name === action.payload);

        const current = {
            cart: [
                ...state.cart.filter(x => x.name !== action.payload),
                ...(item.quantity - 1 <= 0 ? [] : [{ name: item.name, quantity: item.quantity - 1 }])
            ]
        };

        ctx.setState({
            ...state,
            ...current
        });
    }

    @Receiver()
    static emptyCart(ctx: StateContext<App>) {
        const state = ctx.getState();

        const current = {
            cart: []
        };

        ctx.setState({
            ...state,
            ...current
        });
    }

    @Receiver()
    static addToCoffeeList(ctx: StateContext<App>, action: EmitterAction<Coffee[]>) {
        const state = ctx.getState();

        const current = {
            coffeeList: [...state.coffeeList, ...action.payload]
        };

        ctx.setState({
            ...state,
            ...current
        });
    }

    @Receiver()
    static dummySetState(ctx: StateContext<App>, action: EmitterAction<App>) {
        const state = ctx.getState();

        const current = {
            ...action.payload
        };

        ctx.setState({
            ...state,
            ...current
        });
    }
}
