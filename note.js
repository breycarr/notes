(function(exports) {
    function Note() {
        this.list = [];
    };

    Note.prototype.newNote = function(input) {
        this.list.push(input)
    };

    Note.prototype.showShortNote = function() {
        this.list.forEach(function(note) {
            console.log(note.substring(0,20) + "...");
        });
    };

    Note.prototype.showFullNote = function() {
        this.list.forEach(function(note) {
            console.log(note);
        });
    };

    exports.Note = Note;
})(this);

