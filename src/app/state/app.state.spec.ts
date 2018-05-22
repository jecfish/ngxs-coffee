import {
    GetCoffeeListSuccess, GetCoffeeListFailed,
    AddToCart, RemoveCartItem, RemoveOneCartItem,
    EmptyCart, AddToCoffeeList, DummySetState
} from './app.actions';
import { Store, NgxsModule } from '@ngxs/store';
import { async, TestBed } from '@angular/core/testing';
import { getAppInitialState, AppState } from './app.state';
import { HttpClientModule } from '@angular/common/http';

describe('App Reducer', () => {
    let store: Store;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                NgxsModule.forRoot([AppState]),
                HttpClientModule
            ],
        }).compileComponents();

        store = TestBed.get(Store);
    }));

    describe('GET_COFFEE_LIST_SUCCESS', () => {
        it('should return list of coffee', () => {
            // arrange
            const currentState = {
                ...getAppInitialState(),
            };

            const expectedState = {
                ...getAppInitialState(),
                coffeeList: [
                    { name: 'coffee aaa', price: 99, recipe: [] }
                ]
            };

            store.dispatch(new DummySetState(currentState));

            // action
            const action = new GetCoffeeListSuccess([
                { name: 'coffee aaa', price: 99, recipe: [] }
            ]);
            store.dispatch(action);

            store.selectOnce((state: AppApp) => state.app).subscribe(actual => {
                // assert
                expect(actual).toEqual(expectedState);
            });
        });
    });

    describe('GET_COFFEE_LIST_FAILED', () => {
        it('should return empty list', () => {
            // arrange
            const currentState = {
                ...getAppInitialState(),
                coffeeList: [
                    { name: 'coffee efg', price: 88, recipe: [] }
                ]
            };

            const expectedState = {
                ...getAppInitialState(),
                coffeeList: []
            };

            store.dispatch(new DummySetState(currentState));

            // action
            const action = new GetCoffeeListFailed();
            store.dispatch(action);

            store.selectOnce((state: AppApp) => state.app).subscribe(actual => {
                // assert
                expect(actual).toEqual(expectedState);
            });
        });
    });

    describe('ADD_TO_CART', () => {
        it('should add a new item', () => {
            // arrange
            const currentState = {
                ...getAppInitialState(),
            };

            const expectedState = {
                ...getAppInitialState(),
                cart: [
                    { name: 'coffee gg', quantity: 1 }
                ]
            };

            store.dispatch(new DummySetState(currentState));

            // action
            const action = new AddToCart('coffee gg');
            store.dispatch(action);

            store.selectOnce((state: AppApp) => state.app).subscribe(actual => {
                // assert
                expect(actual).toEqual(expectedState);
            });
        });

        it('should increase the item quantity', () => {
            // arrange
            const currentState = {
                ...getAppInitialState(),
                cart: [
                    { name: 'coffee hh', quantity: 2 }
                ]
            };

            const expectedState = {
                ...getAppInitialState(),
                cart: [
                    { name: 'coffee hh', quantity: 3 }
                ]
            };

            store.dispatch(new DummySetState(currentState));

            // action
            const action = new AddToCart('coffee hh');
            store.dispatch(action);

            store.selectOnce((state: AppApp) => state.app).subscribe(actual => {
                // assert
                expect(actual).toEqual(expectedState);
            });
        });
    });

    describe('REMOVE_CART_ITEM', () => {
        it('should remove cart item', () => {
            // arrange
            const currentState = {
                ...getAppInitialState(),
                cart: [
                    { name: 'coffee ii', quantity: 1 },
                    { name: 'coffee jj', quantity: 2 }
                ]
            };

            const expectedState = {
                ...getAppInitialState(),
                cart: [
                    { name: 'coffee ii', quantity: 1 }
                ]
            };

            store.dispatch(new DummySetState(currentState));

            // action
            const action = new RemoveCartItem('coffee jj');
            store.dispatch(action);

            store.selectOnce((state: AppApp) => state.app).subscribe(actual => {
                // assert
                expect(actual).toEqual(expectedState);
            });
        });
    });

    describe('REMOVE_ONE_CART_ITEM', () => {
        it('should deduct cart item quantity', () => {
            // arrange
            const currentState = {
                ...getAppInitialState(),
                cart: [
                    { name: 'coffee kk', quantity: 1 },
                    { name: 'coffee ll', quantity: 12 }
                ]
            };

            const expectedState = {
                ...getAppInitialState(),
                cart: [
                    { name: 'coffee kk', quantity: 1 },
                    { name: 'coffee ll', quantity: 11 }
                ]
            };

            store.dispatch(new DummySetState(currentState));

            // action
            const action = new RemoveOneCartItem('coffee ll');
            store.dispatch(action);

            store.selectOnce((state: AppApp) => state.app).subscribe(actual => {
                // assert
                expect(actual).toEqual(expectedState);
            });
        });

        it('should remove cart item', () => {
            // arrange
            const currentState = {
                ...getAppInitialState(),
                cart: [
                    { name: 'coffee mm', quantity: 1 }
                ]
            };

            const expectedState = {
                ...getAppInitialState(),
                cart: []
            };

            store.dispatch(new DummySetState(currentState));

            // action
            const action = new RemoveOneCartItem('coffee mm');
            store.dispatch(action);

            store.selectOnce((state: AppApp) => state.app).subscribe(actual => {
                // assert
                expect(actual).toEqual(expectedState);
            });
        });
    });

    describe('EMPTY_CART', () => {
        it('should empty cart', () => {
            // arrange
            const currentState = {
                ...getAppInitialState(),
                cart: [
                    { name: 'coffee ii', quantity: 1 },
                    { name: 'coffee jj', quantity: 2 }
                ]
            };

            const expectedState = {
                ...getAppInitialState(),
                cart: []
            };

            store.dispatch(new DummySetState(currentState));

            // action
            const action = new EmptyCart();
            store.dispatch(action);

            store.selectOnce((state: AppApp) => state.app).subscribe(actual => {
                // assert
                expect(actual).toEqual(expectedState);
            });
        });
    });

    describe('ADD_TO_COFFEE_LIST', () => {
        it('should add item to list', () => {
            // arrange
            const currentState = {
                ...getAppInitialState(),
                coffeeList: [
                    { name: 'coffee nn', price: 1, recipe: [] },
                ]
            };

            const expectedState = {
                ...getAppInitialState(),
                coffeeList: [
                    { name: 'coffee nn', price: 1, recipe: [] },
                    { name: 'coffee oo', price: 2, recipe: [] },
                ]
            };

            store.dispatch(new DummySetState(currentState));

            // action
            const action = new AddToCoffeeList([
                { name: 'coffee oo', price: 2, recipe: [] }
            ]);
            store.dispatch(action);

            store.selectOnce((state: AppApp) => state.app).subscribe(actual => {
                // assert
                expect(actual).toEqual(expectedState);
            });
        });
    });
});
