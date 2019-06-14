(function testNotePosition(){
    var note = new Note();
    note.addNote("Hello")
    expect.toEqual(0, note.notePosition())
})();

(function testGetText(){
    var note = new Note();
    note.addNote("Lorem ipsum dolor sit amet");
    expect.toEqual("Lorem ipsum dolor sit amet", note.getText(0));
})();
