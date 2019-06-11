var expect = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      } else if (assertionToCheck) {
       console.log("All is good!")
      }
  }
  };

  var expect = {
    toEqual: function(assertionToCheck, other) {
      if (assertionToCheck !== other) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not equal to " + other);
      } else if (assertionToCheck === other) {
       console.log("All is good!");
      }
  }
  };

  var expect = {
    isLengthZero: function(assertionToCheck) {
    if (assertionToCheck.length !== 0) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not equal to zero ");
    } else if (assertionToCheck.length === 0) {
     console.log("All is good!");
    }
   }
  };