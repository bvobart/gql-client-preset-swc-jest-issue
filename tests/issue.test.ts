import { Foo } from './Foo';

describe('something', () => {
  it('does something', () => {
    const foo = new Foo();
    expect(foo.add(1, 1)).toEqual(2);
  });
});
