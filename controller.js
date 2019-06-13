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
    index = note.showFullNote().length - 1
    document.getElementById('input').value = ""
    newLI = document.createElement('li');
    newLI.setAttribute("id", index)
    output = input.substring(0,20)
    newLI.appendChild(document.createTextNode(output + "..."))
    document.getElementById('note area').appendChild(newLI)
  }

  // function sayHello() {
  //  document.write("Hello")
  // }
}
