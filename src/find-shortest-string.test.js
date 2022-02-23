const findShortestString = require("./find-shortest-string");

test("findShortestString finds the shortest string in an array", () => {
  expect(findLongestString(["it", "isss", "app", "nice", "day"])).toBe("it");
  expect(findLongestString(["whyyyy", "hello", "tooooo", "youuuuu"])).toBe("hello");
});

test("findLongestString returns the earlier string in cases of joint shortest strings", () => {
  expect(findLongestString(["brave", "dance"])).toBe("brave");
  expect(findLongestString(["holeeeee","vroles","troles"])).toBe("vroles")
  expect(findLongestString(["ok","sok","wok","ek"])).toBe("ek")
});