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
    newLI = document.createElement('li');
    newLI.setAttribute("id", index);
    newLI.appendChild(document.createTextNode(output));
    newLI.addEventListener("click", showFullNote);
    document.getElementById('notes area').appendChild(newLI);
  }

  function showFullNote(newLI) {
    let elementId = newLI.path[0].id;
    var fullNote = note.getText(elementId);
    document.write(fullNote);
  }

  function noteLength(input) {
    if(input.length > 20) {
      return input.substring(0,20) + "...";
    } else {
      return input;
    }
  }
}
