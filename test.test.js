describe("passing functions as options", () => {
  it("works", () => {
    expect(global.options.myFunction).toBeDefined();
    expect(global.options.myFunction()).toEqual("works as expected");
  });
})
