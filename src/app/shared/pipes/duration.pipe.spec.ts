import { DurationPipe } from './duration.pipe';

describe('DurationPipe', () => {
  const pipe = new DurationPipe();

  it('formatea segundos como m:ss', () => {
    expect(pipe.transform(0)).toBe('0:00');
    expect(pipe.transform(75)).toBe('1:15');
    expect(pipe.transform(600.9)).toBe('10:00');
  });

  it('devuelve 0:00 con valores no válidos', () => {
    expect(pipe.transform(Number.NaN)).toBe('0:00');
    expect(pipe.transform(null)).toBe('0:00');
    expect(pipe.transform(-5)).toBe('0:00');
  });
});
