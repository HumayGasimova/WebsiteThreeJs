import { TestScheduler } from 'rxjs/testing';
import { callHeroes } from './hero';

describe('Marble testing', () => {

  it('HERO',
    () => {
// new way testScheduler.run(callback)
        const scheduler = new TestScheduler((actual, expected) => {
          expect(actual).toEqual(expected);
        });

        scheduler.run(helpers => {
          const {expectObservable} = helpers;
          const expectedMarble = '1s a 999ms b 999ms c 999ms (d|)';
          const expectedValues = {a: 'Batman', b: 'Spiderman', c: 'Superman', d: 'Ironman'};
          expectObservable(callHeroes()).toBe(expectedMarble, expectedValues)
        })
 
// old way TestScheduler as base concept simple example
        // const scheduler = new TestScheduler((actual, expected) => {
        //   expect(actual).toEqual(expected);
        // });

        // const source$ = scheduler.createColdObservable('--a--b--c|', {a: 6, b: 10, c: 15});
        // const expectedMarble = '--x--y--z|';
        // const expectedValues = {x: 10, y: 20, z: 30};

        // const result = source$.pipe(map((x)=> x*2));

        //   scheduler.expectObservable(result).toBe(expectedMarble, expectedValues);
        //   scheduler.flush()
    })
});
