describe("notes", () => {
    describe("notes page on startup", () => {
        it("should throw an error when array is not empty on startup", () => {
            let note = new Note
            expect(note._list.length).toEq(0);
        })
    })
    describe("add note", () => {
        it("should add a note into the array", () => {
            let note = new Note
            note.addNote("hello")
            expect(note._list[0]).toEq("hello");
        })
    })
    describe("note position", () => {
        it("should see the note in the right index position", () => {
            let note = new Note
            note.addNote("hello")
            note.addNote("goodbye")
            expect(note.getText(1)).toEq("goodbye");
        })
    })
    describe("list", () => {
        it("should have mulitple notes in the list", () => {
            let note = new Note
            note.addNote("hello")
            note.addNote("goodbye")
            note.addNote("helloagain")
            expect(note._list[0]).toContain("hello");
            expect(note._list[1]).toContain("goodbye");
            expect(note._list[2]).toContain("helloagain");
        })
    })
})