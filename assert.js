var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      } else if (assertionToCheck) { 
       console.log("All is good!") 
      }
    }
  };
