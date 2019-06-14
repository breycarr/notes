window.onload = function() {
  var note, createButton;
  note = new Note;

  createButton = document.getElementById("create")
  createButton.addEventListener("click", processNote)

  function processNote(){
    var input, output, index, newLI;

    input = document.getElementById('input').value;
    note.addNote(input);
    document.getElementById('input').value = "";
    output = noteLength(input);
    index = note.notePosition();
    newLI = listTagCreator(index, output);
    document.getElementById('notes area').appendChild(newLI);
  }

// Some of the functions below should be extracted to a model
// However we're not sure which ones
  function noteLength(input) {
    if(input.length > 20) {
      return input.substring(0,20) + "...";
    } else {
      return input;
    }
  }

// This function is 5 lines for better readability and future changes
  function listTagCreator(index, output) {
    let element = document.createElement('li');
    element.setAttribute("id", index);
    element.appendChild(document.createTextNode(output));
    element.addEventListener("click", showFullNote);
    return element
  }

// Is there any better way we could display information?
// Previous attempts used document.write()
// but that limited the ability to return to the note list
  function showFullNote(newLI) {
    let elementId = newLI.path[0].id;
    var fullNote = note.getText(elementId);
    alert(fullNote);
  }
}
