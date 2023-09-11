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
 RUNS  tests/issue.test.ts
thread '<unnamed>' panicked at 'failed to invoke plugin: failed to invoke plugin on 'Some("/home/bart/energiebespaarders/random/gql-client-preset-swc-jest-issue/tests/issue.test.ts")'

Caused by:
    0: failed to invoke `@victorandree/graphql-codegen-client-preset-swc-plugin` as js transform plugin at node_modules/@victorandree/graphql-codegen-client-preset-swc-plugin/swc_plugin.wasm
    1: RuntimeError: out of bounds memory access
           at <unnamed> (<module>[80]:0x1159c)
           at <unnamed> (<module>[91]:0x1a587)
           at <unnamed> (<module>[90]:0x194a2)
           at <unnamed> (<module>[113]:0x29865)
           at <unnamed> (<module>[26]:0x4421)
           at <unnamed> (<module>[288]:0x5622d)
           at <unnamed> (<module>[81]:0x12812)
           at <unnamed> (<module>[287]:0x56131)
           at <unnamed> (<module>[81]:0x121f2)
           at <unnamed> (<module>[113]:0x29912)
           at <unnamed> (<module>[26]:0x4421)
           at <unnamed> (<module>[288]:0x5622d)
           at <unnamed> (<module>[81]:0x12812)
           at <unnamed> (<module>[287]:0x56131)
           at <unnamed> (<module>[81]:0x121f2)
           at <unnamed> (<module>[113]:0x29912)
           at <unnamed> (<module>[25]:0x40bf)
           at <unnamed> (<module>[24]:0x2890)
           at <unnamed> (<module>[336]:0x6df84)
           at <unnamed> (<module>[1648]:0xbfe50)
 FAIL  tests/issue.test.ts/local/cargo/registry/src/index.crates.io-6f17d22bba15001f/swc-0.260.31/src/plugin.rs:219:14
  ● Test suite failed to run

    failed to handle: failed to invoke plugin: failed to invoke plugin on 'Some("/home/bart/energiebespaarders/random/gql-client-preset-swc-jest-issue/tests/issue.test.ts")'

    Caused by:
        0: failed to invoke `@victorandree/graphql-codegen-client-preset-swc-plugin` as js transform plugin at node_modules/@victorandree/graphql-codegen-client-preset-swc-plugin/swc_plugin.wasm
        1: RuntimeError: out of bounds memory access
               at <unnamed> (<module>[80]:0x1159c)
               at <unnamed> (<module>[91]:0x1a587)
               at <unnamed> (<module>[90]:0x194a2)
               at <unnamed> (<module>[113]:0x29865)
               at <unnamed> (<module>[26]:0x4421)
               at <unnamed> (<module>[288]:0x5622d)
               at <unnamed> (<module>[81]:0x12812)
               at <unnamed> (<module>[287]:0x56131)
               at <unnamed> (<module>[81]:0x121f2)
               at <unnamed> (<module>[113]:0x29912)
               at <unnamed> (<module>[26]:0x4421)
               at <unnamed> (<module>[288]:0x5622d)
               at <unnamed> (<module>[81]:0x12812)
               at <unnamed> (<module>[287]:0x56131)
               at <unnamed> (<module>[81]:0x121f2)
               at <unnamed> (<module>[113]:0x29912)
               at <unnamed> (<module>[25]:0x40bf)
               at <unnamed> (<module>[24]:0x2890)
               at <unnamed> (<module>[336]:0x6df84)
               at <unnamed> (<module>[1648]:0xbfe50)
        2: heap_get_oob

      at Compiler.transformSync (node_modules/@swc/core/index.js:241:29)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.334 s, estimated 1 s
Ran all test suites matching /issue.test.ts/i.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

## Expected output

Jest is expected to run and pass the test, because `1 + 1 = 2`.

While the test is a TypeScript file, there is no TypeScript-specific syntax in it, so it can be interpreted as JS too.
The imported `Foo.ts` does contain TypeScript type annotations, but otherwise uses standard ECMAScript features (classes).
