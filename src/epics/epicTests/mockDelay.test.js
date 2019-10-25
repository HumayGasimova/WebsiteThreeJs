import { delay } from 'rxjs/operators';
import {example}  from './mockDelay';

jest.mock('rxjs/operators', () => {
  const operators = jest.requireActual('rxjs/operators');
  operators.delay = jest.fn(() => (s) => s);  // <= mock delay
  return operators;
});

describe('decreasMockDelay', () => {

  describe('delay', () => {
    it('should delay one second', () => {
      const spy = jest.fn();
      example.subscribe(spy);

      expect(delay).toHaveBeenCalledWith(1000);  // Success!
      expect(spy).toHaveBeenCalledWith('hello');  // Success!
    });
  });

});

// import * as sinon from 'sinon';
// import { example } from './code';

// describe('delay', () => {
//   let clock;
//   beforeEach(() => { clock = sinon.useFakeTimers(); });
//   afterEach(() => { clock.restore(); });

//   it('should delay one second', () => {
//     const spy = jest.fn();
//     example.subscribe(spy);

//     expect(spy).not.toHaveBeenCalled();  // Success!
//     clock.tick(1000);
//     expect(spy).toHaveBeenCalledWith('hello');  // Success!
//   });
// });