/* 
Write a test suite then a code in Javascript to do this task:

Simplify a directory path from a string as input.
Example:
Input : /a/./b/../../c/
Output : /c

Write a README to show us how to run your tests.

If something isn't clear to you, make assumptions in the comment.
*/

/* 
MY ASSUMPTIONS:
1) Two dots in the path ("../" or "..") mean I move one directory level up
  Two dots x times means I move x levels up (Ex: if x = 2, if have "../.." or "../../")

2) One dot ("." or "./") means I am staying in the current directory

3) A slash after a directory name and at the end of the input string is useless and has to be removed
  (Ex: "/myproject/" becomes "/myproject")

4) The output path always begins with a slash but never ends with a slash

5) Double slashes become a single slash
*/

const assert = require("assert");
const PathSimplifier = require("../kata_resolution.js");

describe("PathSimplifier", () => {
  it("simplifies the given path", () => {
    const inputPath = "/a/./b/../../c/";
    const expectedPath = "/c";

    const result = PathSimplifier.simplifiesPath(inputPath);

    assert.equal(PathSimplifier.simplifiesPath(result), expectedPath);
  });
  it("simplifies the given path 2", () => {
    const inputPath = "/a/./b/../c/../d/";
    const expectedPath = "/d";

    const result = PathSimplifier.simplifiesPath(inputPath);

    assert.equal(PathSimplifier.simplifiesPath(result), expectedPath);
  });
});