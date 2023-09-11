# MRE for `@graphql-codegen/client-preset-swc-plugin` code transformation with Jest

## To reproduce the issue

```sh
# Install dependencies
yarn

# Run the test
yarn jest issue.test.ts
```

## Actual output

Jest will produce the following output:

```
 FAIL  tests/issue.test.ts
  ● Test suite failed to run


      × Expected ',', got ':'
       ╭─[/~censored~/gql-client-preset-swc-jest-issue/tests/Foo.ts:1:1]
     1 │ export class Foo {
     2 │   add(a: number, b: number): number {
       ·        ─
     3 │     return a + b
     4 │   }
     5 │ }
       ╰────


    Caused by:
        Syntax Error

      3 | describe('something', () => {
      4 |   it('does something', () => {
    > 5 |     const foo = new Foo();
        |              ^
      6 |     expect(foo.add(1, 1)).toEqual(2);
      7 |   });
      8 | });

      at Compiler.transformSync (node_modules/@swc/core/index.js:241:29)
      at Object.<anonymous> (tests/issue.test.ts:5:14)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.741 s
Ran all test suites matching /issue.test.ts/i.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

## Expected output

Jest is expected to run and pass the test, because `1 + 1 = 2`.

While the test is a TypeScript file, there is no TypeScript-specific syntax in it, so it can be interpreted as JS too.
The imported `Foo.ts` does contain TypeScript type annotations, but otherwise uses standard ECMAScript features (classes).
