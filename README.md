# template-typescript

## Questions

### Why do you require the use of Node 18?

At the time of writing, Node 20 has [a bug](https://github.com/TypeStrong/ts-node/issues/2026) that prohibits errors from being serialized correctly. Node 18 does not have this issue. Until the issue is fixed, Node 18 must be used.

### Why are you using .js extensions when importing TypeScript files?

The way TypeScript implements relative imports requires that an extension be used. Since the compiler does not change the import, the `.js` extension must be used to ensure the compiled code can import the compiled dependencies correctly. For more information see: https://devblogs.microsoft.com/typescript/announcing-typescript-4-7/#type-in-package-json-and-new-extensions

### Why did you choose the settings you've defined in `tsconfig.json`?

Let's go through each setting under `ts-node`'s `compilerOptions`:

* `"module": "ES6"`: This ensures transpiled code generates ES6-compatible import statements instead of the CommonJS default.
* `"moduleResolution": "node16"`: This ensures the transpiler uses ES6-compatible module resolution when compiling code instead of the CommonJS default.