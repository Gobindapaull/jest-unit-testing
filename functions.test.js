const func = require("./functions");
// sum toBe
test("Answer is 4", () => {
  expect(func.add(2, 2)).toBe(4);
});
// not sum toBe
test("Not to be tesing", () => {
  expect(func.add(2, 3)).not.toBe(4);
});
// toBeNull
test("Null testing", () => {
  expect(func.isNull()).toBeNull();
});
// toBeFalsy
test("check Value falsy", () => {
  expect(func.checkValue()).toBeFalsy();
});
// toEqual
test("createUser", () => {
  expect(func.createUser()).toEqual({
    firstName: "Brad",
    lastName: "Traversy",
  });
});
// less than and greater than
test("under 1600", () => {
  const load1 = 700;
  const load2 = 800;
  expect(load1 + load2).toBeLessThan(1600);
});
// Regex
test("there is no I in the team", () => {
  expect("team").toMatch(/team/);
});
// Array
test("Admin should be usernames", () => {
  usernames = ["john", "karen", "paul", "bob"];
  expect(usernames).toContain("bob");
});
// axios fetch data
test("fetch data from json placeholder", () => {
  expect.assertions();
  return func.fetchUser().then((data) => {
    expect(data.title).toEqual("delectus aut autem");
  });
});
