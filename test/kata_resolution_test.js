/* 
MY ASSUMPTIONS:

About the input string:
1) Must be a string
2) Must not be empty (at least one slash: "/" or folder name)
3) Must not contain three dots in a row

About the .simplifiesPath method:
1) Two dots in the path ("../") mean I move one directory level up
  Two dots x times means I move x levels up (Ex: if x = 2, I have "../../")

2) One dot (./") means I am staying in the current directory

3) A slash after a directory name and at the end of the input string is useless and has to be removed
  (Ex: "/myproject/" becomes "/myproject")

4) The output path always begins with a slash but never ends with a slash (a slash after the last directory is useless)

5) Multiple consecutive slashes become a single slash
*/

const assert = require("assert");
const PathSimplifier = require("../kata_resolution.js");

describe("PathSimplifier", () => {
  describe(".checksInput", () => {
    it("accepts only strings as input", () => {
      const userInput = 149;

      const exercise = () => {
        PathSimplifier.simplifiesPath(userInput);
      };

      assert.throws(exercise, /Input should be a string/);
    });
    it("throws an error if input string is empty", () => {
      const emptyString = "";

      const exercise = () => {
        PathSimplifier.simplifiesPath(emptyString);
      };

      assert.throws(exercise, /Input can't be an empty string/);
    });
    it("throws an error if input path consists of a single dot", () => {
      const inputPath = ".";

      const exercise = () => {
        PathSimplifier.simplifiesPath(inputPath);
      };

      assert.throws(exercise, /Input is not a valid path/);
    });
    it("throws an error if input path has three dots in a row", () => {
      const inputPath = "/a/./b/../.../c/";

      const exercise = () => {
        PathSimplifier.simplifiesPath(inputPath);
      };

      assert.throws(exercise, /Input is not a valid path/);
    });
  });
  describe(".simplifiesPath", () => {
    it("simplifies a given path", () => {
      const inputPath = "/a/./b/../../c/";
      const expectedPath = "/c";

      const result = PathSimplifier.simplifiesPath(inputPath);

      assert.strictEqual(result, expectedPath);
    });
    it("simplifies a given path 2", () => {
      const inputPath = "/a/./b/../c/../d/";
      const expectedPath = "/a/d";

      const result = PathSimplifier.simplifiesPath(inputPath);

      assert.strictEqual(result, expectedPath);
    });
    it("removes remaining slash after the last directory", () => {
      const inputPath = "/hello/";
      const expectedPath = "/hello";

      const result = PathSimplifier.simplifiesPath(inputPath);

      assert.strictEqual(result, expectedPath);
    });
    it("understands and respects folder and file syntax", () => {
      const inputPath = "/main-file/sub-file/dear_world.js/";
      const expectedPath = "/main-file/sub-file/dear_world.js";

      const result = PathSimplifier.simplifiesPath(inputPath);

      assert.strictEqual(result, expectedPath);
    });
    it("removes unnecessary single dots", () => {
      const inputPath = "/a/./b/./c/./d/";
      const expectedPath = "/a/b/c/d";

      const result = PathSimplifier.simplifiesPath(inputPath);

      assert.strictEqual(result, expectedPath);
    });
    it("removes all unnecessary dots", () => {
      const inputPath = "/a/../.././../../";
      const expectedPath = "/";

      const result = PathSimplifier.simplifiesPath(inputPath);

      assert.strictEqual(result, expectedPath);
    });
    it("removes all unnecessary slashes and dots", () => {
      const inputPath = "/a//b////c/d//././/..";
      const expectedPath = "/a/b/c";

      const result = PathSimplifier.simplifiesPath(inputPath);

      assert.strictEqual(result, expectedPath);
    });
    it("removes all repetitive slashes", () => {
      const inputPath = "/a//b//c//////d";
      const expectedPath = "/a/b/c/d";

      const result = PathSimplifier.simplifiesPath(inputPath);

      assert.strictEqual(result, expectedPath);
    });
    it("returns the root for the root", () => {
      const inputPath = "/";
      const expectedPath = "/";

      const result = PathSimplifier.simplifiesPath(inputPath);

      assert.strictEqual(result, expectedPath);
    });
    it("deals with the non-op of going one level up the root", () => {
      const inputPath = "../";
      const expectedPath = "/";

      const result = PathSimplifier.simplifiesPath(inputPath);

      assert.strictEqual(result, expectedPath);
    });
  });
});
