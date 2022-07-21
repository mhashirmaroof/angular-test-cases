import { SquarePipe } from './square.pipe';
import { FormsModule } from '@angular/forms';
import { TestBed } from '@angular/core/testing';

describe('SquarePipe', () => {
  let pipe: SquarePipe;

  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [SquarePipe],
      imports: [FormsModule]
    })
      .compileComponents();
    pipe = new SquarePipe();
  }));

  it('create an instance', () => {
    const pipe = new SquarePipe();
    expect(pipe).toBeTruthy();
  });

  it('should check pipe transform the number', () => {
    expect(pipe.transform(10)).toBe(100);
    expect(pipe.transform('10a')).toBe('Not a number');
  })
});
