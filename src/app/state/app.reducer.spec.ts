// import {
//     GetCoffeeListSuccess, GetCoffeeListFailed,
//     AddToCart, RemoveCartItem, RemoveOneCartItem,
//     EmptyCart, AddToCoffeeList
// } from './app.actions';
// import { appReducer } from './app.reducer';
// import { appInitialState } from './app.init';

// describe('App Reducer', () => {
//     describe('GET_COFFEE_LIST_SUCCESS', () => {
//         it('should return list of coffee', () => {
//             // arrange
//             const currentState = {
//                 ...appInitialState
//             };

//             const expectedState = {
//                 ...appInitialState,
//                 coffeeList: [
//                     { name: 'coffee aaa', price: 99, recipe: [] }
//                 ]
//             };

//             // action
//             const action = new GetCoffeeListSuccess([
//                 { name: 'coffee aaa', price: 99, recipe: [] }
//             ]);
//             const actual = appReducer(currentState, action);

//             // assert
//             expect(actual).toEqual(expectedState);
//         });
//     });

//     describe('GET_COFFEE_LIST_FAILED', () => {
//         it('should return empty list', () => {
//             // arrange
//             const currentState = {
//                 ...appInitialState,
//                 coffeeList: [
//                     { name: 'coffee efg', price: 88, recipe: [] }
//                 ]
//             };

//             const expectedState = {
//                 ...appInitialState,
//                 coffeeList: []
//             };

//             // action
//             const action = new GetCoffeeListFailed();
//             const actual = appReducer(currentState, action);

//             // assert
//             expect(actual).toEqual(expectedState);
//         });
//     });

//     describe('ADD_TO_CART', () => {
//         it('should add a new item', () => {
//             // arrange
//             const currentState = {
//                 ...appInitialState,
//             };

//             const expectedState = {
//                 ...appInitialState,
//                 cart: [
//                     { name: 'coffee gg', quantity: 1 }
//                 ]
//             };

//             // action
//             const action = new AddToCart('coffee gg');
//             const actual = appReducer(currentState, action);

//             // assert
//             expect(actual).toEqual(expectedState);
//         });

//         it('should increase the item quantity', () => {
//             // arrange
//             const currentState = {
//                 ...appInitialState,
//                 cart: [
//                     { name: 'coffee hh', quantity: 2 }
//                 ]
//             };

//             const expectedState = {
//                 ...appInitialState,
//                 cart: [
//                     { name: 'coffee hh', quantity: 3 }
//                 ]
//             };

//             // action
//             const action = new AddToCart('coffee hh');
//             const actual = appReducer(currentState, action);

//             // assert
//             expect(actual).toEqual(expectedState);
//         });
//     });

//     describe('REMOVE_CART_ITEM', () => {
//         it('should remove cart item', () => {
//             // arrange
//             const currentState = {
//                 ...appInitialState,
//                 cart: [
//                     { name: 'coffee ii', quantity: 1 },
//                     { name: 'coffee jj', quantity: 2 }
//                 ]
//             };

//             const expectedState = {
//                 ...appInitialState,
//                 cart: [
//                     { name: 'coffee ii', quantity: 1 }
//                 ]
//             };

//             // action
//             const action = new RemoveCartItem('coffee jj');
//             const actual = appReducer(currentState, action);

//             // assert
//             expect(actual).toEqual(expectedState);
//         });
//     });

//     describe('REMOVE_ONE_CART_ITEM', () => {
//         it('should deduct cart item quantity', () => {
//             // arrange
//             const currentState = {
//                 ...appInitialState,
//                 cart: [
//                     { name: 'coffee kk', quantity: 1 },
//                     { name: 'coffee ll', quantity: 12 }
//                 ]
//             };

//             const expectedState = {
//                 ...appInitialState,
//                 cart: [
//                     { name: 'coffee kk', quantity: 1 },
//                     { name: 'coffee ll', quantity: 11 }
//                 ]
//             };

//             // action
//             const action = new RemoveOneCartItem('coffee ll');
//             const actual = appReducer(currentState, action);

//             // assert
//             expect(actual).toEqual(expectedState);
//         });

//         it('should remove cart item', () => {
//             // arrange
//             const currentState = {
//                 ...appInitialState,
//                 cart: [
//                     { name: 'coffee mm', quantity: 1 }
//                 ]
//             };

//             const expectedState = {
//                 ...appInitialState,
//                 cart: []
//             };

//             // action
//             const action = new RemoveOneCartItem('coffee mm');
//             const actual = appReducer(currentState, action);

//             // assert
//             expect(actual).toEqual(expectedState);
//         });
//     });

//     describe('EMPTY_CART', () => {
//         it('should empty cart', () => {
//             // arrange
//             const currentState = {
//                 ...appInitialState,
//                 cart: [
//                     { name: 'coffee ii', quantity: 1 },
//                     { name: 'coffee jj', quantity: 2 }
//                 ]
//             };

//             const expectedState = {
//                 ...appInitialState,
//                 cart: []
//             };

//             // action
//             const action = new EmptyCart();
//             const actual = appReducer(currentState, action);

//             // assert
//             expect(actual).toEqual(expectedState);
//         });
//     });

//     describe('ADD_TO_COFFEE_LIST', () => {
//         it('should add item to list', () => {
//             // arrange
//             const currentState = {
//                 ...appInitialState,
//                 coffeeList: [
//                     { name: 'coffee nn', price: 1, recipe: [] },
//                 ]
//             };

//             const expectedState = {
//                 ...appInitialState,
//                 coffeeList: [
//                     { name: 'coffee nn', price: 1, recipe: [] },
//                     { name: 'coffee oo', price: 2, recipe: [] },
//                 ]
//             };

//             // action
//             const action = new AddToCoffeeList([
//                 { name: 'coffee oo', price: 2, recipe: [] }
//             ]);
//             const actual = appReducer(currentState, action);

//             // assert
//             expect(actual).toEqual(expectedState);
//         });
//     });
// });
