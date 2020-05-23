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
    // Je simplifie le string de départ en remplaçant /./ par / et ./ par /:
    const regex2 = /\.{2}/g;
    console.log("str:", str);
    str = str.replace("/./", "/");
    str = str.replace(regex2, ".");
    array = str.split("/");
    array = array.filter((item) => item);
    console.log("array clean:", array);
    let result = [];
    // A chaque nouveau point rencontré, je retire le dernier caractère du résultat :
    for (let i = 0; i < array.length; i++) {
      if (array[i] === ".") {
        console.log("result bf slice:", result);
        result.pop();
        console.log("result sliced:", result);
      } else if (array[i] != "." && array[i] != "/") {
        console.log("result bf +:", result);
        result.push(array[i]);
        console.log("result af +:", result);
      }
    }
    result = "/" + result.join("/");
    return result;
  },
};

module.exports = PathSimplifier;
