const PathSimplifier = {
  checksInput(inputString) {
    if (typeof inputString !== "string") {
      throw new Error("ERROR: Input should be a string");
    }
    if (inputString === "") {
      throw new Error("ERROR: Input can't be an empty string");
    }
    if (inputString.indexOf("...") > -1) {
      throw new Error("ERROR: Input is not a valid path");
    }
    if (inputString.length === 1 && inputString != "/") {
      throw new Error("ERROR: Input is not a valid path");
    }
  },
  simplifiesPath(inputString) {
    this.checksInput(inputString);
    let pathArray = inputString.split("/");
    let result = [];
    // Every time I move up to a directory level, I pop the last directory out from the result:
    for (let i = 0; i < pathArray.length; i++) {
      if (pathArray[i] === "..") {
        result.pop();
      } else if (pathArray[i] != "." && pathArray[i] != "") {
        result.push(pathArray[i]);
      }
    }
    result = "/" + result.join("/");
    return result;
  },
};

module.exports = PathSimplifier;
