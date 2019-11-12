import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export const example = of('hello').pipe(
  delay(1000)
);
