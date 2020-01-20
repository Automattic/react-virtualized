# Automattic fork of `react-virtualized`.

This fork exists as a way of avoiding a dependency on `@babel/runtime`, which forcibly pulls in polyfills even where they are not required.
In order to achieve this, the build is modified to perform minimal transpilation, with JSX preserved. These modified sources can then be transpiled further as needed by the consumer.

## Upstream

See the main [`react-virtualized` project](https://github.com/bvaughn/react-virtualized) for anything unrelated to this fork.
