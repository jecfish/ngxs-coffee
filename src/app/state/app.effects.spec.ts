// import { TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { provideMockActions } from '@ngrx/effects/testing';
// import { StoreModule } from '@ngrx/store';

// import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/observable/of';
// import { _throw } from 'rxjs/observable/throw';
// // import 'rxjs/add/observable/throw';
// import { hot, cold } from 'jasmine-marbles';

// import { CoffeeService } from '../services/coffee.service';
// import * as AppActions from './app.actions';
// import { appReducer } from './app.reducer';
// import { appInitialState } from './app.init';
// import { AppEffects } from './app.effects';

// // https://github.com/ngrx/platform/blob/master/docs/effects/testing.md
// // https://github.com/ReactiveX/rxjs/blob/5.4.2/doc/writing-marble-tests.md

// describe('My Effects', () => {
//     let effects: AppEffects;
//     let actions: Observable<any>;
//     let service: CoffeeService;

//     beforeEach(() => {
//         TestBed.configureTestingModule({
//             imports: [
//                 HttpClientTestingModule,
//                 StoreModule.forRoot(
//                     { app: appReducer },
//                     { initialState: { app: appInitialState } }
//                 )
//             ],
//             providers: [
//                 AppEffects,
//                 CoffeeService,
//                 provideMockActions(() => actions),
//             ],
//         });

//         effects = TestBed.get(AppEffects);
//         service = TestBed.get(CoffeeService);
//     });

//     describe('GET_COFFEE_LIST', () => {
//         it('should return success', () => {
//             const action = new AppActions.GetCoffeeList();
//             const completion = new AppActions.GetCoffeeListSuccess([
//                 { name: 'coffee cc', price: 77, recipe: [] }
//             ]);

//             spyOn(service, 'getAll').and.returnValue(of([
//                 { name: 'coffee cc', price: 77, recipe: [] }
//             ]));

//             // Refer to 'Writing Marble Tests' for details on '--a-' syntax
//             actions = hot('--a-', { a: action });
//             const expected = cold('--b', { b: completion });

//             expect(effects.getCoffeeListStart$).toBeObservable(expected);
//         });

//         it('should return throw error', () => {
//             const action = new AppActions.GetCoffeeList();
//             const completion = new AppActions.GetCoffeeListFailed();

//             // or import throw, use Observable.throw('err')
//             spyOn(service, 'getAll').and.returnValue(_throw('err'));

//             // Refer to 'Writing Marble Tests' for details on '--a-' syntax
//             actions = hot('--a-', { a: action });
//             const expected = cold('--b', { b: completion });

//             expect(effects.getCoffeeListStart$).toBeObservable(expected);
//         });
//     });
// });
