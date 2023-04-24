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

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    /full-path/is/not/important/gql-client-preset-swc-jest-issue/tests/issue.test.ts:2
    describe('something', async *()=>{});
                                ^^

    SyntaxError: Malformed arrow function parameter list

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1495:14)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.369 s, estimated 1 s
Ran all test suites matching /issue.test.ts/i.
error Command failed with exit code 1.
```

# Expected output

Jest is expected to run and fail the test, because `1 + 1 = 2`, not `3`:

```
 FAIL  tests/issue.test.ts
  something
    ✕ does something (4 ms)

  ● something › does something

    expect(received).toEqual(expected) // deep equality

    Expected: 3
    Received: 2

      1 | describe('something', () => {
      2 |   it('does something', () => {
    > 3 |     expect(1 + 1).toEqual(3);
        |                   ^
      4 |   })
      5 | })
      6 |

      at Object.toEqual (tests/issue.test.ts:3:19)

Test Suites: 1 failed, 1 total
Tests:       1 failed, 1 total
Snapshots:   0 total
Time:        0.38 s
Ran all test suites matching /issue.test.ts/i.
error Command failed with exit code 1.
```

While the test is a TypeScript file, there is no TypeScript-specific syntax in the file, so it can be interpreted as JS too.
