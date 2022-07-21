import { EnclosePipe } from './enclose.pipe';

describe('EnclosePipe', () => {
  let pipe:any;

  beforeEach(() => {
    pipe = new EnclosePipe;
  })

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('[Parameter Passed] - Test Pipe with Params', () => {
    expect(pipe.transform('Sample Text', 'curly')).toBe('{Sample Text}');
  })
});
