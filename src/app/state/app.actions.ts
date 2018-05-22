/* coffee list */

export class GetCoffeeList {
    static readonly type = 'GET_COFFEE_LIST';
    constructor() { }
}

export class GetCoffeeListSuccess {
    static readonly type = 'GET_COFFEE_LIST_SUCCESS';
    constructor(public payload: Coffee[]) { }
}

export class GetCoffeeListFailed {
    static readonly type = 'GET_COFFEE_LIST_FAILED';
    constructor(public payload?: any) { }
}

/* cart */

export class AddToCart {
    static readonly type = 'ADD_TO_CART';
    constructor(public payload: string) { }
}

export class RemoveCartItem {
    static readonly type = 'REMOVE_CART_ITEM';
    constructor(public payload: string) { }
}

export class RemoveOneCartItem {
    static readonly type = 'REMOVE_ONE_CART_ITEM';
    constructor(public payload: string) { }
}

export class EmptyCart {
    static readonly type = 'EMPTY_CART';
    constructor() { }
}

/* extra - with remix */

export class AddToCoffeeList {
    static readonly type = 'ADD_TO_COFFEE_LIST';
    constructor(public payload: Coffee[]) { }
}

// TODO: dummy for unit testing purpose
export class DummySetState {
    static readonly type = 'DUMMY_SET_STATE';
    constructor(public payload: App) { }
}

