var expect = {
    // isTrue: function(assertionToCheck) {
    //   if (!assertionToCheck) {
    //     throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    //   } else if (assertionToCheck) {
    //    console.log("All is good!")
    //   }
    // },

    toEqual: function(assertionToCheck, source) {
      if (assertionToCheck !== source) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not equal to " + source);
      } else if (assertionToCheck === source) {
      console.log("All is good!");
      }
    },

    isLengthZero: function(assertionToCheck) {
      if (assertionToCheck.length !== 0) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not equal to zero ");
      } else if (assertionToCheck.length === 0) {
      console.log(assertionToCheck + "length is equal to 0");
      }
    },

    include: function(assertionToCheck, source) {
      if (!source.includes(assertionToCheck)) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not included in " + source);
      } else if (source.includes(assertionToCheck)) {
        console.log(source + " does include " + assertionToCheck);
      }
    }
};
