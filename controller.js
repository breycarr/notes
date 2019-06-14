window.onload = function() {
  var note, createButton;
  note = new Note;

  // noteHeader = document.getElementById("title")
  // noteHeader.addEventListener("click", sayHello)
  createButton = document.getElementById("create")
  createButton.addEventListener("click", processNote)

  function processNote(){
    var input, output, index, newLI;

    input = document.getElementById('input').value;
    note.addNote(input);
    index = note.notePosition()
    document.getElementById('input').value = ""
    newLI = document.createElement('li');
    newLI.setAttribute("id", index)
    output = input.substring(0,20)
    newLI.appendChild(document.createTextNode(output + "..."))
    newLI.addEventListener("click", showFullNote)
    document.getElementById('note area').appendChild(newLI)
  }

  function showFullNote(newLI) {
    let elementId =  newLI.path[0].id
    console.log(newLI)
    console.log(elementId)
  }
  // function sayHello() {
  //  document.write("Hello")
  // }
}
