/* coffee list */

export class GetCoffeeList {
    static readonly type = '[Coffee API] GET_COFFEE_LIST';
    constructor() { }
}

/* cart */

export class AddToCart {
    static readonly type = '[List Page] ADD_TO_CART';
    constructor(public payload: string) { }
}

export class AddOneCartItem {
    static readonly type = '[Cart Page] ADD_ONE_CART_ITEM';
    constructor(public payload: string) { }
}


export class RemoveOneCartItem {
    static readonly type = '[Cart Page] REMOVE_ONE_CART_ITEM';
    constructor(public payload: string) { }
}

export class RemoveCartItem {
    static readonly type = '[Cart Page] REMOVE_CART_ITEM';
    constructor(public payload: string) { }
}

export class EmptyCart {
    static readonly type = '[Pay Component] EMPTY_CART';
    constructor() { }
}

