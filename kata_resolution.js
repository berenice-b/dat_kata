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
  simplifiesPath(inputString) {
    // I simplify the input string and turn it into an array:
    const singleDotsRegex = /(?<=\/)(\.)(?=\/)/g; // Matches single dots between slashes
    const doubleDotsRegex = /\.{2}/g; // Matches "/../" substring
    console.log("inputString:", inputString);
    let cleanString = inputString
      .replace(singleDotsRegex, "")
      .replace(doubleDotsRegex, ".");
    console.log("cleanString:", cleanString);
    let pathArray = cleanString.split("/");
    pathArray = pathArray.filter((item) => item);
    console.log("pathArray:", pathArray);
    let result = [];
    // A chaque nouveau point rencontré, je retire le dernier caractère du résultat :
    for (let i = 0; i < pathArray.length; i++) {
      if (pathArray[i] === ".") {
        console.log("result before .pop():", result);
        result.pop();
        console.log("result popped:", result);
      } else if (pathArray[i] != "." && pathArray[i] != "/") {
        console.log("result before push:", result);
        result.push(pathArray[i]);
        console.log("result after push:", result);
      }
    }
    result = "/" + result.join("/");
    return result;
  },
};

module.exports = PathSimplifier;
