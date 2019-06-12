function testNoteListDefaultisEmpty(){
    var note = new Note();
    expect.isLengthZero(note.list);
  };

  testNoteListDefaultisEmpty();

  function testAddNewNote(){
    var note = new Note();
    note.addNote("Hello")
    expect.include("Hello", note.list)
  };

  testAddNewNote();

  function testFullNote(){
    var note = new Note();
    note.addNote("Lorem ipsum dolor sit amet");
    expect.toEqual("Lorem ipsum dolor sit amet", note.showFullNote());
  }

  testFullNote();

  function testShortNote(){
    var note = new Note();
    note.addNote("Lorem ipsum dolor sit amet");
    expect.toEqual("Lorem ipsum dolor si...", note.showShortNote;
  }

  testShortNote();
