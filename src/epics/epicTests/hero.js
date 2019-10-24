import { interval } from "rxjs"
import { map, take } from 'rxjs/operators';

export const callHeroes = () => {
    let heroes = ['Batman', 'Spiderman', 'Superman', 'Ironman']
    return interval(1000).pipe(
        take(heroes.length),
        map(i=>heroes[i])
    )
}