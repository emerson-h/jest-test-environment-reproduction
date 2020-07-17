This is a minimum reproduction of an issue with passing functions to
a custom testEnvironment as options while Jest is running tests in 
parallel.

To reproduce the bug:
1. clone
2. `yarn install`
3. `yarn jest --runInBand` -> all tests pass
4. `yarn jest --watch` -> all tests fail
