/* 
Write a test suite then a code in Javascript to do this task:

Simplify a directory path from a string as input.
Example:
Input : /a/./b/../../c/
Output : /c

Write a README to show us how to run your tests.

If something isn't clear to you, make assumptions in the comment.
*/

const PathSimplifier = {
  simplifiesPath(str) {
    for (let i = str.length - 1; i > 0; i--) {
      if (str[i] === "/") {
        if (str[i - 1] != "." && str[i - 1] != "/") {
          return "/" + str[i - 1];
        }
      }
    }
  },
};

module.exports = PathSimplifier;

/* 




if (str[i - 1] === "/") {
          str.slice(i, 1);
        }
        if (str[i - 1] === ".") {
          if (str[i - 2] === "/") {
            str.slice(i, 1);
            str.slice(i - 1, 1);
          }
          if (str[i - 2] === ".") {
            return "/" + str[i];
          }
        } */
