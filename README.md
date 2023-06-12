# template-typescript

## Questions

### Why do you require the use of Node 18?

At the time of writing, Node 20 has [a bug](https://github.com/TypeStrong/ts-node/issues/2026) that prohibits errors from being serialized correctly. Node 18 does not have this issue. Until the issue is fixed, Node 18 must be used.