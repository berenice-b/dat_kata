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
    // Je remplace /./ par / et ./ par /:
    const regex2 = /\.{2}/g;
    console.log("str:", str);
    str = str.replace("/./", "/");
    str = str.replace(regex2, ".");
    console.log("str clean:", str);
    // Jusqu'au premier point trouvé, j'enregistre le substring comme résultat :
    let result = "";
    console.log("result:", result);
    // A chaque nouveau point rencontré, je retire le dernier caractère du résultat :
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ".") {
        console.log("result bf slice:", result);
        result = result.slice(0, result.length - 1);
        console.log("result sliced:", result);
      } else if (str[i] != "." && str[i] != "/") {
        console.log("result bf +:", result);
        result += str[i];
        console.log("result af +:", result);
      }
    }
    result = "/" + result.split("").join("/");
    return result;
  },
};

module.exports = PathSimplifier;
