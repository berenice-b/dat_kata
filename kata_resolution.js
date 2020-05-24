const PathSimplifier = {
  simplifiesPath(inputString) {
    if (typeof inputString !== "string") {
      throw new Error("ERROR: Input should be a string");
    }
    if (inputString === "") {
      throw new Error("ERROR: Input can't be an empty string");
    }
    // I simplify the input string and turn it into an array:
    const singleDotsRegex = /(?<=\/)(\.)(?=\/)/g; // Matches single dots between slashes
    const doubleDotsRegex = /\.{2}/g; // Matches "/../" substring
    let pathArray = inputString
      .replace(singleDotsRegex, "")
      .replace(doubleDotsRegex, ".")
      .split("/")
      .filter((item) => item);
    let result = [];
    // Every time I move up to a directory level, I pop the last directory out from the result:
    for (let i = 0; i < pathArray.length; i++) {
      if (pathArray[i] === ".") {
        result.pop();
      } else if (pathArray[i] != "." && pathArray[i] != "/") {
        result.push(pathArray[i]);
      }
    }
    result = "/" + result.join("/");
    return result;
  },
};

module.exports = PathSimplifier;
