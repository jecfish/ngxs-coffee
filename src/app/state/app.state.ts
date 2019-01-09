import { State, Action, StateContext, Selector } from '@ngxs/store';

import {
    AddToCart, RemoveCartItem,
    RemoveOneCartItem, EmptyCart,
    GetCoffeeList,
    AddOneCartItem
} from './app.actions';

import { CoffeeService } from '../services/coffee.service';

@State<App>({
    name: 'app',
    defaults: {
        coffeeList: [],
        cart: []
    }
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

    @Selector()
    static totalCartQuantity(state: App) {
        const total = state.cart
            .reduce((acc, curr) => acc + curr.quantity, 0);

        return total;
    }

    @Action(GetCoffeeList)
    async getCoffeeList(ctx: StateContext<App>, action: GetCoffeeList) {
        const coffeeList = await this.coffeeSvc.getList();

        const state = ctx.getState();

        ctx.setState({
            ...state,
            coffeeList
        });
    }

    @Action([AddToCart, AddOneCartItem])
    addToCart(ctx: StateContext<App>, action: AddToCart) {
        const state = ctx.getState();

        // find cart item by item name
        const { quantity = 0 } = state.cart.find(x => x.name === action.payload) || {};

        const cart = [
            ...state.cart.filter(x => x.name !== action.payload),
            {
                name: action.payload, quantity: quantity + 1
            }
        ];

        ctx.setState({
            ...state,
            cart
        });
    }

    @Action(RemoveOneCartItem)
    removeOneCartItem(ctx: StateContext<App>, action: RemoveOneCartItem) {
        const state = ctx.getState();

        const item = state.cart.find(x => x.name === action.payload);

        const cart = [
            ...state.cart.filter(x => x.name !== action.payload),
            ...(item.quantity - 1 <= 0 ? [] : [{ name: item.name, quantity: item.quantity - 1 }])
        ];

        ctx.setState({
            ...state,
            cart
        });
    }

    @Action(RemoveCartItem)
    removeCartItem(ctx: StateContext<App>, action: RemoveCartItem) {
        const state = ctx.getState();

        const cart = [...state.cart.filter(x => x.name !== action.payload)];

        ctx.setState({
            ...state,
            cart
        });
    }

    @Action(EmptyCart)
    emptyCart(ctx: StateContext<App>, action: EmptyCart) {
        const state = ctx.getState();

        const cart = [];

        ctx.setState({
            ...state,
            cart
        });
    }
}
