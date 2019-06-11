function testNoteListDefaultisEmpty(){
    var note = new Note();
    expect.isLengthZero(note.list);
  };

  testNoteListDefaultisEmpty();

  function testAddNewNote(){
    var note = new Note();
    note.newNote("Hello")
    expect.include("Hello", note.list)
  };

  testAddNewNote();