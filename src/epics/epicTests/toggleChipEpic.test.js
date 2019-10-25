import { ActionsObservable } from 'redux-observable';
import * as Epic from '../index'
import * as actionTypes from "../../constants/actionTypes";
import { delay, toArray } from 'rxjs/operators';

jest.mock('rxjs/operators', () => {
  const operators = jest.requireActual('rxjs/operators');
  operators.delay = jest.fn(() => (s) => s);  // <= mock delay
  return operators;
});

describe('toggleChipEpic', () => {

    it('should (for chip1 if showChip is true) return TOGGLE_CHIP in 120000 ms',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: 'chip1'
            });

            const state$ = {
                value: {
                    business: {
                        chips: [{chipsNumber: 'chip1', showChip: true}]
                    }
                }
            }

            Epic.toggleChipEpic(action$, state$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(120000);  
            expect(spy).toHaveBeenNthCalledWith(1, {  
                type: actionTypes.TOGGLE_CHIP,
                val: false,
                chipsNumber: 'chip1'
            });  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        })

    it('should (for chip1 if showChip is false) return TOGGLE_CHIP in 1000 ms',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.TOGGLE_CHIP,
                val: false,
                chipsNumber: 'chip1'
            });

            const state$ = {
                value: {
                    business: {
                        chips: [{chipsNumber: 'chip1', showChip: false}]
                    }
                }
            }

            Epic.toggleChipEpic(action$, state$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(1000);  
            expect(spy).toHaveBeenNthCalledWith(1, {  
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: 'chip1'
            });  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        })

    it('should (for chip2 if showChip is true) return TOGGLE_CHIP in 120000 ms',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: 'chip2'
            });

            const state$ = {
                value: {
                    business: {
                        chips: [{chipsNumber: 'chip2', showChip: true}]
                    }
                }
            }

            Epic.toggleChipEpic(action$, state$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(120000);  
            expect(spy).toHaveBeenNthCalledWith(1, {  
                type: actionTypes.TOGGLE_CHIP,
                val: false,
                chipsNumber: 'chip2'
            });  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        })

    it('should (for chip2 if showChip is false) return TOGGLE_CHIP in 1000 ms',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.TOGGLE_CHIP,
                val: false,
                chipsNumber: 'chip2'
            });

            const state$ = {
                value: {
                    business: {
                        chips: [{chipsNumber: 'chip2', showChip: false}]
                    }
                }
            }

            Epic.toggleChipEpic(action$, state$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(1000);  
            expect(spy).toHaveBeenNthCalledWith(1, {  
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: 'chip2'
            });  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        })

    it('should (for chip3 if showChip is true) return TOGGLE_CHIP in 120000 ms',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: 'chip3'
            });

            const state$ = {
                value: {
                    business: {
                        chips: [{chipsNumber: 'chip3', showChip: true}]
                    }
                }
            }

            Epic.toggleChipEpic(action$, state$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(120000);  
            expect(spy).toHaveBeenNthCalledWith(1, {  
                type: actionTypes.TOGGLE_CHIP,
                val: false,
                chipsNumber: 'chip3'
            });  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        })

    it('should (for chip3 if showChip is false) return TOGGLE_CHIP in 1000 ms',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.TOGGLE_CHIP,
                val: false,
                chipsNumber: 'chip3'
            });

            const state$ = {
                value: {
                    business: {
                        chips: [{chipsNumber: 'chip3', showChip: false}]
                    }
                }
            }

            Epic.toggleChipEpic(action$, state$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(1000);  
            expect(spy).toHaveBeenNthCalledWith(1, {  
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: 'chip3'
            });  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        })

    it('should (for chip4 if showChip is true) return TOGGLE_CHIP in 120000 ms',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: 'chip4'
            });

            const state$ = {
                value: {
                    business: {
                        chips: [{chipsNumber: 'chip4', showChip: true}]
                    }
                }
            }

            Epic.toggleChipEpic(action$, state$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(120000);  
            expect(spy).toHaveBeenNthCalledWith(1, {  
                type: actionTypes.TOGGLE_CHIP,
                val: false,
                chipsNumber: 'chip4'
            });  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        })

    it('should (for chip4 if showChip is false) return TOGGLE_CHIP in 1000 ms',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.TOGGLE_CHIP,
                val: false,
                chipsNumber: 'chip4'
            });

            const state$ = {
                value: {
                    business: {
                        chips: [{chipsNumber: 'chip4', showChip: false}]
                    }
                }
            }

            Epic.toggleChipEpic(action$, state$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(1000);  
            expect(spy).toHaveBeenNthCalledWith(1, {  
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: 'chip4'
            });  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        })

    it('should (for chip5 if showChip is true) return TOGGLE_CHIP in 120000 ms',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: 'chip5'
            });

            const state$ = {
                value: {
                    business: {
                        chips: [{chipsNumber: 'chip5', showChip: true}]
                    }
                }
            }

            Epic.toggleChipEpic(action$, state$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(120000);  
            expect(spy).toHaveBeenNthCalledWith(1, {  
                type: actionTypes.TOGGLE_CHIP,
                val: false,
                chipsNumber: 'chip5'
            });  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        })

    it('should (for chip5 if showChip is false) return TOGGLE_CHIP in 1000 ms',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.TOGGLE_CHIP,
                val: false,
                chipsNumber: 'chip5'
            });

            const state$ = {
                value: {
                    business: {
                        chips: [{chipsNumber: 'chip5', showChip: false}]
                    }
                }
            }

            Epic.toggleChipEpic(action$, state$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(1000);  
            expect(spy).toHaveBeenNthCalledWith(1, {  
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: 'chip5'
            });  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        })

    it('should (for chip6 if showChip is true) return TOGGLE_CHIP in 120000 ms',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: 'chip6'
            });

            const state$ = {
                value: {
                    business: {
                        chips: [{chipsNumber: 'chip6', showChip: true}]
                    }
                }
            }

            Epic.toggleChipEpic(action$, state$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(120000);  
            expect(spy).toHaveBeenNthCalledWith(1, {  
                type: actionTypes.TOGGLE_CHIP,
                val: false,
                chipsNumber: 'chip6'
            });  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        })

    it('should (for chip6 if showChip is false) return TOGGLE_CHIP in 1000 ms',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.TOGGLE_CHIP,
                val: false,
                chipsNumber: 'chip6'
            });

            const state$ = {
                value: {
                    business: {
                        chips: [{chipsNumber: 'chip6', showChip: false}]
                    }
                }
            }

            Epic.toggleChipEpic(action$, state$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(1000);  
            expect(spy).toHaveBeenNthCalledWith(1, {  
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: 'chip6'
            });  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        })

    it('should (for chip7 if showChip is true) return TOGGLE_CHIP in 120000 ms',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: 'chip7'
            });

            const state$ = {
                value: {
                    business: {
                        chips: [{chipsNumber: 'chip7', showChip: true}]
                    }
                }
            }

            Epic.toggleChipEpic(action$, state$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(120000);  
            expect(spy).toHaveBeenNthCalledWith(1, {  
                type: actionTypes.TOGGLE_CHIP,
                val: false,
                chipsNumber: 'chip7'
            });  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        })

    it('should (for chip7 if showChip is false) return TOGGLE_CHIP in 1000 ms',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.TOGGLE_CHIP,
                val: false,
                chipsNumber: 'chip7'
            });

            const state$ = {
                value: {
                    business: {
                        chips: [{chipsNumber: 'chip7', showChip: false}]
                    }
                }
            }

            Epic.toggleChipEpic(action$, state$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(1000);  
            expect(spy).toHaveBeenNthCalledWith(1, {  
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: 'chip7'
            });  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        })

    it('should (for chip8 if showChip is true) return TOGGLE_CHIP in 120000 ms',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: 'chip8'
            });

            const state$ = {
                value: {
                    business: {
                        chips: [{chipsNumber: 'chip8', showChip: true}]
                    }
                }
            }

            Epic.toggleChipEpic(action$, state$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(120000);  
            expect(spy).toHaveBeenNthCalledWith(1, {  
                type: actionTypes.TOGGLE_CHIP,
                val: false,
                chipsNumber: 'chip8'
            });  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        })

    it('should (for chip8 if showChip is false) return TOGGLE_CHIP in 1000 ms',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.TOGGLE_CHIP,
                val: false,
                chipsNumber: 'chip8'
            });

            const state$ = {
                value: {
                    business: {
                        chips: [{chipsNumber: 'chip8', showChip: false}]
                    }
                }
            }

            Epic.toggleChipEpic(action$, state$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(1000);  
            expect(spy).toHaveBeenNthCalledWith(1, {  
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: 'chip8'
            });  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        })

    it('should (for chip9 if showChip is true) return TOGGLE_CHIP in 120000 ms',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: 'chip9'
            });

            const state$ = {
                value: {
                    business: {
                        chips: [{chipsNumber: 'chip9', showChip: true}]
                    }
                }
            }

            Epic.toggleChipEpic(action$, state$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(120000);  
            expect(spy).toHaveBeenNthCalledWith(1, {  
                type: actionTypes.TOGGLE_CHIP,
                val: false,
                chipsNumber: 'chip9'
            });  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        })

    it('should (for chip9 if showChip is false) return TOGGLE_CHIP in 1000 ms',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.TOGGLE_CHIP,
                val: false,
                chipsNumber: 'chip9'
            });

            const state$ = {
                value: {
                    business: {
                        chips: [{chipsNumber: 'chip9', showChip: false}]
                    }
                }
            }

            Epic.toggleChipEpic(action$, state$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(1000);  
            expect(spy).toHaveBeenNthCalledWith(1, {  
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: 'chip9'
            });  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        })

    it('should (for chip10 if showChip is true) return TOGGLE_CHIP in 120000 ms',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: 'chip10'
            });

            const state$ = {
                value: {
                    business: {
                        chips: [{chipsNumber: 'chip10', showChip: true}]
                    }
                }
            }

            Epic.toggleChipEpic(action$, state$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(120000);  
            expect(spy).toHaveBeenNthCalledWith(1, {  
                type: actionTypes.TOGGLE_CHIP,
                val: false,
                chipsNumber: 'chip10'
            });  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        })

    it('should (for chip10 if showChip is false) return TOGGLE_CHIP in 1000 ms',
        () => {
            const spy = jest.fn();
            const action$ = ActionsObservable.of({
                type: actionTypes.TOGGLE_CHIP,
                val: false,
                chipsNumber: 'chip10'
            });

            const state$ = {
                value: {
                    business: {
                        chips: [{chipsNumber: 'chip10', showChip: false}]
                    }
                }
            }

            Epic.toggleChipEpic(action$, state$).subscribe(spy);

            expect(delay).toHaveBeenCalledWith(1000);  
            expect(spy).toHaveBeenNthCalledWith(1, {  
                type: actionTypes.TOGGLE_CHIP,
                val: true,
                chipsNumber: 'chip10'
            });  
        
            expect(spy).toHaveBeenCalledTimes(1); 
        })

});